import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import { GraphQLClient } from 'graphql-request';
import ProductVariant from "../db/models/ProductVariant";
import Cart from "../db/models/Cart";
const https = require('https');
const request = require('request');

/*
inPayload =
            store: Store
            deltas: [ 
                { id: 'gid://shopify/ProductVariant/37019409973406',                                                   
                price_old: '22.00',                                                                                  
                price_new: '23.00' } ]  
*/


export const klaviyoEvent: Task = async (inPayload: any, { addJob, withPgClient }) => {

    const store: Store = inPayload['payload']['store'] as Store
    const deltas = inPayload['payload']['deltas']

    console.log(store)
    console.log(deltas)
    // console.log(payload)
    const productIds = deltas.map((p: { id: any; }) => p.id)// ['gid://shopify/ProductVariant/37019409973406']
    if (productIds.length === 0) { return }
    const promises = productIds.map(async (id: any) => {
      return await getCart(id)
    })

    const carts = (await Promise.all(promises)).map((x: any) => x)
    
    const emailObjects = carts.map( (cart: { dataValues: { productVariant_cart: { dataValues: { productVariant_id: any; }; }; email: any; abandoned_checkout_url: any; }; }) => {
      console.log(cart.dataValues.productVariant_cart)
      const product_id = cart.dataValues.productVariant_cart.dataValues.productVariant_id
      const productVariant = deltas.filter((x: { id: any; }) => x.id === product_id)[0]

      return {
        email: cart.dataValues.email,
        url: cart.dataValues.abandoned_checkout_url,
        product_id: product_id,
        price_old: productVariant.price_old,
        price_new: productVariant.price_new
      }
    })

    console.log(emailObjects)

    // const store: Store = inPayload['payload'] as any;
    // const token = store.accessToken;
    // const storeURL = store.name;

    // console.log(`~~~~ running install store ~~~~`)
  

    // getShopifyCheckouts(storeURL, token, withPgClient)
    // getProductVariants(store)
};


async function getCart(id: string) {
    const product = await ProductVariant.findOne({
      where: {
        id: id
      },
        include: [{
        model: Cart,
        as: 'carts',
        required: false,
        attributes: ['id', 'email', 'abandoned_checkout_url'],
      }]
    })
  
    return product?.carts
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
