import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import ProductVariant from "../db/models/ProductVariant";
import Cart from "../db/models/Cart";
const https = require('https');
const request = require('request');
const fs = require('fs');

import { klaviyoAbandonedCartJsonForCart } from '../helpers'
import ProductVariantCart from '../db/models/ProductVariantCart';
 
export interface Email {
    email: string,
    cart: Cart,
    deltas: Delta[],
}

export interface Delta {
  id: string,
  price_old: string,
  price_new: string,
}
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
    const deltas: Delta[] = inPayload['payload']['deltas'] as Delta[]

    console.log(deltas)
    console.log(store)

    const productIds = deltas.map((p: { id: any; }) => p.id)// ['gid://shopify/ProductVariant/37019409973406']
    if (productIds.length === 0) { return }

    // update store event count
    Store.update({
      klaviyoPricedropEventsSent: (store.klaviyoPricedropEventsSent ?? 0) + 1
    }, {where: {id: store.id}})


    const carts = await getCartsFromProductVariants(productIds)
    const emails: Email[] = carts.map(c => {
      return {
        cart: c,
        email: c.email,
        deltas: deltas,
      }
    })

    emails.map(email => {
      sendKlaviyoEvent(email, store)
    })
    deltas.forEach((delta: any) => {
        console.log(`should update product ${delta.id} from ${delta.price_old} -> **${delta.price_new}**`)
        ProductVariant.update({
                price: delta.price_new
            }, {
                where: {
                    id: delta.id
            }
        }) 
    })
    /***********************/
    /*   OLD CODE follows  */
    /***********************/

    // const promises = productIds.map(async (id: any) => {
    //   return await getProductVariant(id)
    // })

    // const productVariants: ProductVariant[] = await Promise.all(promises)

    // const emailMatrix: Email[][] = productVariants.map( (productVariant: ProductVariant) => {
    //     return productVariant.carts.map(cart => {
    //         const product = deltas.filter((x: { id: any; }) => x.id === productVariant.id)[0]
    //         return {
    //             email: cart.email,
    //             cart: cart,
    //             productVariant: productVariant,
    //             price_old: product.price_old, // 23
    //             price_new: product.price_new
    //         }
    //     })

    // })

    // const emails: Email[] = ([] as any).concat(... emailMatrix);
    // emails.map(email => {
    //     sendKlaviyoEvent(email, store)
    // })

    // deltas.forEach((delta: any) => {
    //     console.log(`should update product ${delta.id} from ${delta.price_old} -> **${delta.price_new}**`)
    //     ProductVariant.update({
    //             price: delta.price_new
    //         }, {
    //             where: {
    //                 id: delta.id
    //         }
    //     }) 
    // })
};

async function getCartsFromProductVariants(ids: string[]): Promise<Cart[]> {
  const promises = ids.map( id => getCartsFromProductVariant(id) )
  const combined = await Promise.all(promises)
  return combined.flatMap(c => c)
}

async function getCartsFromProductVariant(id: string): Promise<Cart[]> {
  const joins: ProductVariantCart[] = await ProductVariantCart.findAll({
    where: {
      productVariant_id: id
    }
  })

  const promises: Promise<Cart | null>[] = joins.map(j => j.cart_id ).map(async id => {
    return await Cart.findOne({
      where: {
        id: id
      },
      include: [{
        model: ProductVariant,
        as: 'products'
      }]
    })
  })

  const result: (Cart | null)[] = await Promise.all(promises)
  const filteredResult: Cart[] = result.filter(notEmpty);
  return new Promise((resolve) => resolve(filteredResult))
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

async function getProductVariant(id: string): Promise<ProductVariant> {
    const product = await ProductVariant.findOne({
      where: {
        id: id
      },
        include: [{
        model: Cart,
        as: 'carts',
        required: false,
        attributes: ['id', 'email', 'abandoned_checkout_url', 'rawJson'],
      }]
    })
  
    return product!
}
  
export async function sendKlaviyoEvent(email: Email, store: Store, ping: Boolean = false) {
  const data = await getEmailEncoded(email, store)
    var options = {
      'method': 'GET',
      'url': `https://a.klaviyo.com/api/track?data=${data}`,
      'headers': { }
    };

    request(options, function (error: string | undefined, response: { body: any; }) {


      if (ping === true) {
        const success = response.body === '1'

          Store.update({
            apiKeySynced: success
        }, {
          where: {
            id: store.id
        }
      }) 
      }
    });
}
  
async function getEmailEncoded(email: Email, store: Store) {
    const time = parseInt(`${(new Date()).getTime() / 1000}`);
    const klaviyo = klaviyoAbandonedCartJsonForCart(email.cart, email.deltas)
    const payload = {
      "token" : store.klaviyoAPIKey!,
      "event" : "Price Drop",
      "customer_properties" : {
        "$email" : email.email,
      },
      "properties": klaviyo,
      "time" : time,
    }

    console.log(payload)

    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64')

    return encoded
}

function removeHttps(url: string): string {
  return url.replace(/^https?\:\/\//i, "");
}