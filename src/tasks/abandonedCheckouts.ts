import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import { GraphQLClient } from 'graphql-request';
const https = require('https');
const JsonlParser = require('stream-json/jsonl/Parser');
const request = require('request');
const fetch = require('node-fetch');

const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

const limit = 250

interface AbandonedCheckoutPayload {
    store: Store,
    since_id?: Number,
}

interface Checkout {
    id: string,
    email: string,
    abandoned_checkout_url: string,
    items: string[],
}

export const abandonedCheckoutsTask: Task = async (inPayload: any, { addJob, withPgClient }) => {
    const payload: AbandonedCheckoutPayload = inPayload as AbandonedCheckoutPayload;
    console.log(`abandoned checkout payload ${payload.store.accessToken} ${payload.since_id}`)
    getShopifyCheckouts(payload, withPgClient)
}

function endpoint(payload: AbandonedCheckoutPayload): string {
    if (payload.since_id !== undefined) {
        return `https://${payload.store.name}/admin/api/2020-10/checkouts.json?limit=${limit}&since_id=${payload.since_id}`
    } else {
        return `https://${payload.store.name}/admin/api/2020-10/checkouts.json?limit=${limit}`
    }
}

async function getShopifyCheckouts(payload: AbandonedCheckoutPayload, withPgClient: WithPgClient) {
    var options = {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': payload.store.accessToken,
      }
    };
  
    const response = await fetch(endpoint(payload), options)
    const body = await response.json()
    const checkouts: Checkout[] = body.checkouts.map((checkout: any) => {
        const items = checkout.line_items.map((item: { [x: string]: any; }) => {
          return {
            "id": `gid://shopify/ProductVariant/${item["variant_id"]}`
          }
        })
        console.log(items)
        return {
            id: checkout.id,
            email: checkout.email,
            abandoned_checkout_url: checkout.abandoned_checkout_url,
            items: items,
        }
    })

    console.log(`fetched ${checkouts.length} checkouts`)

    if (checkouts.length > 0) {
        const lastId = checkouts[checkouts.length - 1]
        console.log(`performing new fetch ${lastId.id}`)
        await saveCheckouts(checkouts, withPgClient)

        const date = new Date((new Date()).getTime() + 0.55*60000)

        await quickAddJob(
            { connectionString: uri },
            "abandonedCheckouts", // Task identifier
            {   store: payload.store,
                since_id: lastId.id },
            { runAt: date }) // payload
        
    } else {
        // no more checkouts
    }
}

async function saveCheckouts(checkouts: Checkout[], withPgClient: WithPgClient) {
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
            abandoned_checkout_url: checkout.abandoned_checkout_url,
            rawJson: 'rawJson'
          }
      }));
  
    await withPgClient((pgClient) => {
      console.log('')
        console.log(`   [update called]`)
        console.log('')

        // pgClient.query(`insert into "Carts" ("rawJson", id, email, "abandoned_checkout_url", "createdAt", "updatedAt") select a->>"rawJson", a->>'id', a->>'email', a->>'abandoned_checkout_url', now(), now() from json_array_elements($1::json) a on conflict do nothing`, [cartJson])

        return pgClient.query(`insert into "ProductVariantCarts" (cart_id, "productVariant_id", "createdAt", "updatedAt") select a->>'cart_id', a->>'productVariant_id', now(), now() from json_array_elements($1::json) a on conflict do nothing`, [checkoutJoin])
    });
}
// https://zeiger-5.myshopify.com/admin/api/2020-10/checkouts.json?limit=5
// https://zeiger-5.myshopify.com/admin/api/2020-10/checkouts.json?limit=5&since_id=4295621738654

// no token, -> start with first
// with token, -> start with second
// if checkouts.length === 0, terminate spawning of tasks
