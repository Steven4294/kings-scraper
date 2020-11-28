
const { run, quickAddJob } = require("graphile-worker");
const https = require('https');

require('@babel/polyfill');

import { GraphQLClient, gql } from 'graphql-request'
var request = require('request');

const {chain}  = require('stream-chain');

const {parser} = require('stream-json');
const {pick}   = require('stream-json/filters/Pick');
const {ignore} = require('stream-json/filters/Ignore');
const {streamValues} = require('stream-json/streamers/StreamValues');
const JsonlParser = require('stream-json/jsonl/Parser');
const jsonlParser = new JsonlParser();
const fs   = require('fs');

// import db from '../server/api/models.js'

// const Store = db.stores
// const ProductVariant = db.productVariants
// const Cart = db.carts

// db.sequelize.sync()



  
const { Pool, Client } = require('pg')
const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'



// add
async function main() {
    const runner = await run({
        connectionString: uri,
        concurrency: 5,
        noHandleSignals: false,
        pollInterval: 1000,

        taskList: {
            productUpdate: async (payload: { productVariantDic: any; domain: any; }, helpers: any) => {
              const { productVariantDic, domain } = payload;
            
              const ids = productVariantDic.map((variant: { id: any; }) => variant.id)




              // [ { id: 'gid://shopify/ProductVariant/36985047089310', price: '11.00' } ]   




            },
            installStore: async (payload: { store: any; }, helpers: any) => {
                // make gql query to fetch products. kick off getProduct
                const store = payload.store
                const token = store.accessToken
                const storeURL = store.name

                getShopifyCheckouts(storeURL, token)
                getProductVariants(store, storeURL, token)

            },

            getProducts: async (payload: { store: any; }, helpers: any) => {
              const store = payload.store
              const accessToken = store.accessToken
              const storeURL = store.name

                console.log(`   >>> 2 ${storeURL} : ${accessToken}`)

                const endpoint = `https://${storeURL}/admin/api/2020-10/graphql.json`
                const client = new GraphQLClient(endpoint, { headers: {
                  'Content-Type': 'application/json',
                  'X-Shopify-Access-Token': accessToken,
                } })

                const query = `
                query {
                    currentBulkOperation {
                      id
                      status
                      errorCode
                      createdAt
                      completedAt
                      objectCount
                      fileSize
                      url
                      partialDataUrl
                    }
                  }
                `
                const variables = ''
                client.request(query, variables).then(async (data) => {
                    const status = data.currentBulkOperation.status
                    console.log(status)

                    if (status === 'CREATED' || status === 'RUNNING') {
                      const date = new Date((new Date()).getTime() + 0.5*60000)
                      console.log(`adding another getProductsPoll ${date}`)

                        await quickAddJob(
                            { connectionString: uri },
                            "getProducts", // Task identifier
                            { store: store }, // payload
                            {
                              runAt: date
                            }
                        );
                    } else if(status === 'COMPLETED') {
                        const url = data.currentBulkOperation.url
                        downloadJSONL(url)
                    } else {

                    }

                })

            },
            getAbandonedCheckouts: async (payload: any, helpers: any) => {
              // TODO: get abandoned checkouts
              // const productId = "36985046991006"

              // const carts = await getCart(productId)
            },

            sendKlaviyoEvents: async (payload: { productVariants: any[]; }, helpers: any) => {
              // TODO: get abandoned checkouts
              // { store:
              //   { name: 'zeiger-5.myshopify.com',
              //     accessToken: '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' },
              // productVariants:
              //   [ { id: 'gid://shopify/ProductVariant/37019409973406',
              //       price_old: '30.30',
              //       price_new: '32.30' } ] }

              console.log(payload)
              const productIds = payload.productVariants.map((p: { id: any; }) => p.id)// ["36985046991006"]
              if (productIds.length === 0) { return }
              const promises = productIds.map(async (id: any) => {
                return await getCart(id)
              })

              const carts = (await Promise.all(promises)).map((x: any) => x)
              console.log('**** CARTS ****')

              const emailObjects = carts.map( (cart: { dataValues: { productVariant_cart: { dataValues: { productVariant_id: any; }; }; email: any; abandoned_checkout_url: any; }; }) => {
                console.log(cart.dataValues.productVariant_cart)
                const product_id = cart.dataValues.productVariant_cart.dataValues.productVariant_id
                const productVariant = payload.productVariants.filter((x: { id: any; }) => x.id === product_id)[0]

                return {
                  email: cart.dataValues.email,
                  url: cart.dataValues.abandoned_checkout_url,
                  product_id: product_id,
                  price_old: productVariant.price_old,
                  price_new: productVariant.price_new

                }
              })

              console.log(emailObjects)
          },
        }
    });


    setTimeout(async () => {
      console.log('')
      console.log('Adding Jobs')
      console.log('')

//       const stores = await Store.findAll();
//       const store = stores[0]
        const store = {
            accessToken: "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",
            name: "zeiger-5.myshopify.com"
        }
    await quickAddJob(
        { connectionString: uri },
        "installStore", // Task identifier
        { store: store }, // payload
    );

//     await quickAddJob(
//       { connectionString: uri },
//       "getAbandonedCheckouts", // Task identifier
//       { store: store }, // payload
//   );
  
  // await quickAddJob(
  //   { connectionString: uri },
  //   "sendKlaviyoEvents", // Task identifier
  //   { store: store }, // payload
  // );

    }, 1000)

    sendKlaviyoEvent()

    test()
}

async function test() {
  //   const data = `[{"id":"gid://shopify/ProductVariant/37027998138526","price":"1.00"},{"id":"gid://
  //   shopify/ProductVariant/37027998171294","price":"8.00"}]`   
  // await saveData(data)
  // await saveData(data)
}
  
function downloadJSONL(url: any) {
    https.get(url, (resp: { pipe: (arg0: any) => any; }) => {
      const pipeline = resp.pipe(jsonlParser)
      var count = 0
      pipeline.on('data', (data: { value: any; }) => {
        count++

        result = result + JSON.stringify(data.value) + ","

      });
      var result = ''
      pipeline.on('end', () => {
        result = result.slice(0, -1); 

        result = `[${result}]`
        console.log(`object count ${count}`)
        saveData(result)
      });
    })
}

// TODO: fix
// Error [ERR_STREAM_WRITE_AFTER_END]: write after end
// at writeAfterEnd (_stream_writable.js:243:12)
// at JsonlParser.Writable.write (_stream_writable.js:291:5)
async function saveData(data: string) {
  console.log(`saving data...`)

  // const pool = new Pool({
  //   uri,
  // })
  // pool.query('SELECT NOW()', (err, res) => {
  //   console.log(err, res)
  //   pool.end()
  // })
  const client = new Client({
    uri,
  })
  client.connect()
  client.query('SELECT NOW()', (err: any, res: any) => {
    console.log(err, res)
    client.end()
  })
//   const client = new Client()
// await client.connect({uri,})
// // const res = await client.query('SELECT NOW()')

//   // var client = await pool.connect()
//   try {
//     var start = new Date()
//     await client.query(`insert into product_variants (id, price, "createdAt", "updatedAt") select a->>'id', a->>'price', now(), now() from json_array_elements($1::json) a on conflict (id) do update set price = excluded.price, "updatedAt" = now()`, [data])

//     var end = new Date() - start
//     console.log(`execution time ${end}`)
//     await client.end()

//     // client.release()
//   } catch (error) {
//     await client.end()

//     // client.release(error)
//     throw error
//   }

//   const stores = await Store.findAll();
//   const store = stores[0]

// await quickAddJob(
//     { connectionString: uri },
//     "installStore", // Task identifier
//     { store: store }, // payload
// );
  console.log('saved data')
}

async function getProductVariants(store: any, storeURL: any, token: any) {
  const endpoint = `https://${storeURL}/admin/api/2020-10/graphql.json`
  const client = new GraphQLClient(endpoint, { headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token,
  } })

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

  const variables = ''
  client.request(query, variables).then(async (data) => {
    const date = new Date((new Date()).getTime() + 0.1*60000)
    console.log(`adding initial get products job ${date}`)
      await quickAddJob(
          { connectionString: uri },
          "getProducts", // Task identifier
          { store: store }, // payload
          {
              runAt: date //new Date((new Date()).getTime() + 1*60000)
          }
      );
  })
}

async function getShopifyCheckouts(storeURL: any, token: any) {
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

    // try {

    //   await pool.query(`insert into "carts" (id, email, "abandoned_checkout_url", "createdAt", "updatedAt") select a->>'id', a->>'email', a->>'abandoned_checkout_url', now(), now() from json_array_elements($1::json) a`, [cartJson])

    //   await pool.query(`insert into "productVariant_cart" (cart_id, "productVariant_id", "createdAt", "updatedAt") select a->>'cart_id', a->>'productVariant_id', now(), now() from json_array_elements($1::json) a`, [checkoutJoin])
    // } finally {
    //   client.release()
    // }
  });
}

async function getCart(id: any) {
  // const gid = `gid://shopify/ProductVariant/${id}`
//   const product = await ProductVariant.findOne({
//     where: {
//       id: id
//     },
//       include: [{
//       model: Cart,
//       as: 'carts',
//       required: false,
//       attributes: ['id', 'email', 'abandoned_checkout_url'],
//     }]
//   })

  // console.log(product)
  // console.log('>>>')
  // product.carts.map(cart => {

  // })

  //return product.carts
}

function sendKlaviyoEvent() {
  var options = {
    'method': 'GET',
    'url': `https://a.klaviyo.com/api/track?data=${getEmailEncoded()}`,
    'headers': { }
  };
  request(options, function (error: string | undefined, response: { body: any; }) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

function getEmailEncoded() {
  const payload = {
    "token" : "TimvnR",
    "event" : "Elected President",
    "customer_properties" : {
      "$email" : "stevenpetterutijr@gmail.com"
    },
    "properties" : {
      "PreviouslyVicePresident" : true,
      "YearElected" : 1801,
      "VicePresidents" : ["Aaron Burr", "George Clinton"]
    },
    "time" : 1606416502
  }
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});