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
            product {
              featuredImage {
                originalSrc
              }
            }
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

    console.log(`~~~~ running install store ~~~~`)
  
    getProductVariants(store)

    await quickAddJob(
        { connectionString: uri },
        "abandonedCheckouts", // Task identifier
        { store: store }, // payload
    );
};

async function getProductVariants(store: Store) {
    const endpoint = `https://${store.name}/admin/api/2020-10/graphql.json`
    const client = new GraphQLClient(endpoint, { headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': store.accessToken,
    } })
  
    console.log(`key: ${store.accessToken} || ${endpoint} == ${store.klaviyoAPIKey}`)
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