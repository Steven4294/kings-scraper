import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import { GraphQLClient } from 'graphql-request';
import ProductVariant from "../db/models/ProductVariant";
import Cart from "../db/models/Cart";
const https = require('https');
const request = require('request');

export interface Email {
    email: string,
    price_old: string,
    price_new: string,
    cart: Cart,
    productVariant: ProductVariant,
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
    const deltas = inPayload['payload']['deltas']

    console.log(deltas)
    console.log(store)

    const productIds = deltas.map((p: { id: any; }) => p.id)// ['gid://shopify/ProductVariant/37019409973406']
    if (productIds.length === 0) { return }
    const promises = productIds.map(async (id: any) => {
      return await getProductVariant(id)
    })

    const productVariants: ProductVariant[] = await Promise.all(promises)

    const emailMatrix: Email[][] = productVariants.map( (productVariant: ProductVariant) => {
      console.log(`carts ${productVariant.carts.length}`)
        return productVariant.carts.map(cart => {
            const product = deltas.filter((x: { id: any; }) => x.id === productVariant.id)[0]
            return {
                email: cart.email,
                cart: cart,
                productVariant: productVariant,
                price_old: product.price_old, // 23
                price_new: product.price_new
            }
        })

    })

    console.log(emailMatrix)
    const emails: Email[] = ([] as any).concat(... emailMatrix);
    console.log(emails)
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

    // const store: Store = inPayload['payload'] as any;
    // const token = store.accessToken;
    // const storeURL = store.name;

    // console.log(`~~~~ running install store ~~~~`)
  

    // getShopifyCheckouts(storeURL, token, withPgClient)
    // getProductVariants(store)
};


async function getProductVariant(id: string): Promise<ProductVariant> {
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
  
    return product!
}
  
export function sendKlaviyoEvent(email: Email, store: Store) {
    var options = {
      'method': 'GET',
      'url': `https://a.klaviyo.com/api/track?data=${getEmailEncoded(email, store)}`,
      'headers': { }
    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) {
          console.log(`error sending klaviyo email ${error}`)
          throw new Error(error)
        } else {
          console.log(`successfully sent email to klaviyo ${store.name} ${email.email}`)
        }
    });
}
  
function getEmailEncoded(email: Email, store: Store) {
    const time = parseInt(`${(new Date()).getTime() / 1000}`);
    const payload = {
      "token" : store.klaviyoAPIKey!,
      "event" : "Price Drop",
      "customer_properties" : {
        "$email" : email.email
      },
      "properties" : {
        // "price_new" : email.price_new,
        // "price_old" : email.price_old,
        "products": [{
          "title": email.productVariant.title,
          "handle": email.productVariant.handle,
          "url": email.productVariant.imgSrc,
          "variant": [],
          "quantity": 1,
          "line_price": email.price_new,
          "line_price_old": email.price_old,
        }],
        "checkout_url" : removeHttps(email.cart.abandoned_checkout_url),
        // "id": email.product_id
      },
      "time" : time,
    }
    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64')
    console.log(payload)
    return encoded
}

function removeHttps(url: string): string {
  return url.replace(/^https?\:\/\//i, "");
}