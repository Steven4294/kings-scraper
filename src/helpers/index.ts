import { ShopifyAbandonedCartJson, KlaviyoAbandonedCartJson, LineItem, construct } from './models'
import Cart from '../db/models/Cart';
import { Delta } from '../tasks/klaviyoEvent';

function convert(shopify: ShopifyAbandonedCartJson, cart: Cart, deltas: Delta[]): KlaviyoAbandonedCartJson {
    console.log(`line items`)
    console.log(`================`)
    console.log(cart.abandoned_checkout_url)

    const line_items = (shopify.line_items ?? []).map(l => construct(cart, l, deltas) ).filter(isNotNullish)

    const response: KlaviyoAbandonedCartJson = {
        $value: 10.0,
        collections: [],
        "Discount Codes": shopify.discount_codes,
        "Item Count": shopify.line_items.length,
        "Items": [],
        "Source Name": shopify.source_name,
        "Total Discounts": shopify.total_discounts,
        extra: {
            checkout_url: shopify.abandoned_checkout_url,
            full_landing_site: shopify.landing_site,
            // TODO: fix this, this sometimes throws
            line_items: line_items,
            note_attributes: [],
            referring_site: shopify.referring_site,
            responsive_checkout_url: shopify.abandoned_checkout_url,
            token: shopify.token,
        }
    }
    return response
}
export function isNotNullish<T>(x: T | null | undefined): x is T {
    return x != null;
  }


export function klaviyoAbandonedCartJsonForCart(cart: Cart, deltas: Delta[]): KlaviyoAbandonedCartJson{
    const str = cart.rawJson ?? ""
    const shopify: ShopifyAbandonedCartJson = JSON.parse(str)
    const klaviyo = convert(shopify, cart, deltas)
    return klaviyo
}

function removeHttps(url: string): string {
    return url.replace(/^https?\:\/\//i, "");
}
