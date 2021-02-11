import Cart from "../../db/models/Cart";
import { Delta } from '../../tasks/klaviyoEvent';

export interface ShopifyAbandonedCartJson {
    id: number,
    token: string,
    cart_token: string,
    email: string,
    gateway: string,
    buyer_accepts_marketing: string,
    created_at: string,
    updated_at: string,
    landing_site: string,
    note: string,
    referring_site: string,
    taxes_included: boolean,
    total_weight: number,
    currency: string,
    customer_locale: string,
    line_items: LineItem[],
    name: string,
    abandoned_checkout_url: string,
    discount_codes: string[],
    source_name: string,
    presentment_currency: string,
    total_discounts: string,
    total_line_items_price: string,
    total_price: string,
    total_tax: string,
    subtotal_price: string,
}

export interface LineItem {
    key: number,
    fulfillment_service: string,
    gift_card: boolean,
    grams: number,
    presentment_title: string,
    presentment_variant_title: string,
    product_id: number,
    quantity: number,
    requires_shipping: boolean,
    sku: string,
    taxable: string,
    title: string,
    variant_id: number,
    variant_title: string,
    vendor: string,
    compare_at_price: string,
    line_price: string,
    price: string,
}

export interface KlaviyoAbandonedCartJson {
    $value: number,
    collections: string[],
    "Discount Codes": string[],
    "Item Count": number,
    "Items": string[],
    "Source Name": string,
    "Total Discounts": string,
    extra: KlaviyoAbandonedCartExtraJson
}

export interface KlaviyoAbandonedCartExtraJson {
    checkout_url: string,
    full_landing_site: string,
    line_items: KlaviyoLineItem[],
    note_attributes: string[],
    referring_site: string,
    responsive_checkout_url: string,
    token: string,
}

interface KlaviyoLineItem extends LineItem {
    price_added_to_cart: string,
    price_before_drop: string,
    product: Product,
}

interface Product {
    handle: string,
    id: string,
    tags: string,
    title: string,
    vendor: string,
    images: Image[]
    variant: ProductVariant
}

interface ProductVariant {
    images: Image[],
    sku: string,
    title: string,
}

interface Image {
    src: string,
}

export function construct(cart: Cart, lineItem: LineItem, deltas: Delta[]): KlaviyoLineItem | undefined {
    // p.id = gid://shopify/ProductVariant/37019410006174
    const cartProducts = cart.getDataValue('products').filter(p => p.id === `gid://shopify/ProductVariant/${lineItem.variant_id}`)
    if (cartProducts.length === 0) { return }
    const cartProduct = cartProducts[0] // TODO: this needs to filter
    const deltaFiltered = deltas.filter(x => x.id === cartProduct.id)
    var price_old = lineItem.price
    var price_new = lineItem.price
    if (deltaFiltered.length > 0) {
        price_old = deltaFiltered[0].price_old
        price_new = deltaFiltered[0].price_new
    }

    console.log(`price_atc ${lineItem.price} price_prev ${price_old} price ${price_new}`)

    const products: Product =  {
            handle: cartProduct.handle ?? "",
            id: cartProduct.id ?? "",
            tags: "tags",
            title: cartProduct.title ?? "",
            vendor: "vendor",
            images: [{
                src: cartProduct.imgSrc ?? ""
            }],
            variant: {
                images: [{
                    src: cartProduct.imgSrc ?? ""
                }],
                sku: "",
                title: cartProduct.title ?? "",
            }
    }
    return {
        key: lineItem.key,
        fulfillment_service: lineItem.fulfillment_service,
        gift_card: lineItem.gift_card,
        grams: lineItem.grams,
        presentment_title: lineItem.presentment_title,
        presentment_variant_title: lineItem.presentment_variant_title,
        product_id: lineItem.product_id,
        quantity: lineItem.quantity,
        requires_shipping: lineItem.requires_shipping,
        sku: lineItem.sku,
        taxable: lineItem.taxable,
        title: lineItem.title,
        variant_id: lineItem.variant_id,
        variant_title: lineItem.variant_title,
        vendor: lineItem.vendor,
        compare_at_price: lineItem.compare_at_price,
        line_price: price_new,
        price: price_new,
        product: products,
        price_added_to_cart: lineItem.price,
        price_before_drop: price_old,
    }
}

function removeHttps(url: string): string {
    return url.replace(/^https?\:\/\//i, "");
}
