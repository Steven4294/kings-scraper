import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import { GraphQLClient } from 'graphql-request';
const https = require('https');
const request = require('request');

const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

const query = `
mutation {
  bulkOperationRunQuery(
  query: """
    {
      productVariants {
        edges {
          node {
            id
            price
          }
        }
      }
    }
    """
) {
  bulkOperation {
    id
    status
  }
  userErrors {
    field
    message
    }
  }
}`

export const installStore: Task = async (inPayload: any, { addJob, withPgClient }) => {
    const store: Store = inPayload['payload'] as any;
    const token = store.accessToken;
    const storeURL = store.name;

    console.log(`~~~~ running install store ~~~~`)
  

    getShopifyCheckouts(storeURL, token, withPgClient)
    getProductVariants(store)
};

async function getShopifyCheckouts(storeURL: string, token: string, withPgClient: WithPgClient) {
    var options = {
      'method': 'GET',
      'url': `https://${storeURL}/admin/api/2020-10/checkouts.json`,
      'headers': {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      }
    };
  
    return request(options, async (error: string | undefined, response: { body: string; }) => {
      if (error) throw new Error(error);
      const body = JSON.parse(response.body)
      const checkouts = body.checkouts.map((checkout: { [x: string]: any[]; email: any; abandoned_checkout_url: any; id: any; }) => {
        const items = checkout["line_items"].map((item: { [x: string]: any; }) => {
          return {
            "id": `gid://shopify/ProductVariant/${item["variant_id"]}`
          }
        })
        console.log(items)
        return {
          email: checkout.email,
          abandoned_checkout_url: checkout.abandoned_checkout_url,
          items: items,
          id: `${checkout.id}`,
        }
      })
      
      const checkoutJoin = JSON.stringify(checkouts.map((checkout: { items: any[]; id: any; }) => {
        return checkout.items.map((item: { id: any; }) => {
          return {
            cart_id: checkout.id,
            productVariant_id: item.id,
          }
        })
      }).flatMap((x: any) => x))
  
      const cartJson = JSON.stringify(checkouts.map((checkout: { id: any; email: any; abandoned_checkout_url: any; }) => {
          return {
            id: checkout.id,
            email: checkout.email,
            abandoned_checkout_url: checkout.abandoned_checkout_url
          }
      }));
  
        await withPgClient((pgClient) => {
            console.log(`updatets called`)
            pgClient.query(`insert into "Carts" (id, email, "abandoned_checkout_url", "createdAt", "updatedAt") select a->>'id', a->>'email', a->>'abandoned_checkout_url', now(), now() from json_array_elements($1::json) a on conflict do nothing`, [cartJson])

            return pgClient.query(`insert into "ProductVariantCarts" (cart_id, "productVariant_id", "createdAt", "updatedAt") select a->>'cart_id', a->>'productVariant_id', now(), now() from json_array_elements($1::json) a on conflict do nothing`, [checkoutJoin])

        });
    });
  }

  async function getProductVariants(store: Store) {
    const endpoint = `https://${store.name}/admin/api/2020-10/graphql.json`
    const client = new GraphQLClient(endpoint, { headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': store.accessToken,
    } })
  
    const variables = ''
    client.request(query, variables).then(async (data) => {
      const date = new Date((new Date()).getTime() + 0.1*60000)
      console.log(`adding INTIAL get products job ${date}`)
        await quickAddJob(
            { connectionString: uri },
            "getProducts", // Task identifier
            { payload: store }, // payload
            {
                runAt: date //new Date((new Date()).getTime() + 1*60000)
            }
        );
    })
  }