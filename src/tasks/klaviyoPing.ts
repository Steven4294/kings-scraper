import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import { sendKlaviyoEvent, Email } from './klaviyoEvent';
import Store from '../db/models/Store';
import Cart from '../db/models/Cart';
import ProductVariant from '../db/models/ProductVariant';

export const klaviyoPing: Task = async (inPayload: any, { addJob, withPgClient }) => {
    const store: Store = inPayload['payload'] as Store

    
    const productVariant = ProductVariant.build({
        id: 'gid://shopify/ProductVariant/36986160840862',
        price: '100.00',
        imgSrc: 'https://i.picsum.photos/id/490/200/300.jpg?hmac=8hYDsOwzzMCthBMYMN9bM6POtrJfVAmsvamM2oOEiF4',
        handle: 'this-is-a-handle',
        title: 'Deer handler [Klaviyo Ping]',
        carts: [ ],
    })

    const cart = Cart.build({
        id: 'cart_xyz',
        abandoned_checkout_url: 'https://zeiger-5.myshopify.com/51333660830/checkouts/113a3cbe6ef8c0b7788989a05677cb6e?_ke=eyJrbF9jb21wYW55X2lkIjogIlRpbXZuUiIsICJrbF9lbWFpbCI6ICJzdGV2ZW5wZXR0ZXJ1dGlqckBnbWFpbC5jb20ifQ%3D%3D',
        email: 'test_mcgee@gmail.com',
        rawJson: '{"id":17034788274334,"token":"285d74699fa4f05902a4370dc39d7a78","cart_token":"224c0ae78107c18c3b4045ca502dcee1","email":"stevenpetterutijr@gmail.com","gateway":null,"buyer_accepts_marketing":false,"created_at":"2020-11-25T20:41:32-05:00","updated_at":"2020-11-25T20:41:57-05:00","landing_site":"/password","note":null,"note_attributes":[],"referring_site":"","shipping_lines":[],"taxes_included":false,"total_weight":0,"currency":"USD","completed_at":null,"closed_at":null,"user_id":null,"location_id":null,"source_identifier":null,"source_url":null,"device_id":null,"phone":null,"customer_locale":"en","line_items":[{"applied_discounts":[],"key":"d6ac7f128daaaa135bee330b38ffd9bf","destination_location_id":null,"fulfillment_service":"oberlo","gift_card":false,"grams":0,"origin_location_id":2510254178462,"presentment_title":"Snow Mountain Portable USB Humidifier","presentment_variant_title":"","product_id":5913338609822,"properties":[],"quantity":1,"requires_shipping":true,"sku":"39241965-humidifier","tax_lines":[],"taxable":false,"title":"Snow Mountain Portable USB Humidifier","variant_id":36986160840862,"variant_title":"","variant_price":"100.00","vendor":"zeiger-5","user_id":null,"unit_price_measurement":{"measured_type":null,"quantity_value":null,"quantity_unit":null,"reference_value":null,"reference_unit":null},"rank":null,"compare_at_price":null,"line_price":"100.00","price":"100.00"}],"name":"#17034788274334","source":null,"abandoned_checkout_url":"https://zeiger-5.myshopify.com/51333660830/checkouts/285d74699fa4f05902a4370dc39d7a78/recover?key=ca5db013864b4cc9b1c84bd30c398176","discount_codes":[],"tax_lines":[],"source_name":"web","presentment_currency":"USD","total_discounts":"0.00","total_line_items_price":"100.00","total_price":"100.00","total_tax":"0.00","subtotal_price":"100.00","total_duties":null,"shipping_address":{"first_name":"Richard","address1":"110 Beverly Street","phone":null,"city":"BOSTON","zip":"02114","province":"Massachusetts","country":"United States","last_name":"Gayler","address2":"Apt 1001","company":null,"latitude":42.3655068,"longitude":-71.0598409,"name":"Richard Gayler","country_code":"US","province_code":"MA"},"customer":{"id":4292788846750,"email":"rfgayler@gmail.com","accepts_marketing":false,"created_at":"2020-11-25T20:41:57-05:00","updated_at":"2020-12-26T18:26:59-05:00","first_name":"Richard","last_name":"Gayler","orders_count":0,"state":"disabled","total_spent":"0.00","last_order_id":null,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":null,"tags":"","last_order_name":null,"currency":"USD","accepts_marketing_updated_at":"2020-11-25T20:41:57-05:00","marketing_opt_in_level":null,"tax_exemptions":[],"admin_graphql_api_id":"gid://shopify/Customer/4292788846750","default_address":{"id":4965022859422,"customer_id":4292788846750,"first_name":"Richard","last_name":"Gayler","company":null,"address1":"110 Beverly Street","address2":"Apt 1001","city":"BOSTON","province":"Massachusetts","country":"United States","zip":"02114","phone":null,"name":"Richard Gayler","province_code":"MA","country_code":"US","country_name":"United States","default":true}}}',
    })

    cart.setDataValue('products', [productVariant])
    // await cart.$set('products', [productVariant])


    const email: Email = {
        email: 'stevenpetterutijr@gmail.com',
        // price_old: '200.00',
        // price_new: '150.00',
        cart: cart,
        deltas: [{
            id: 'gid://shopify/ProductVariant/36986160840862',
            price_old: '100.00',
            price_new: '80.00',
        }],
        // productVariant: productVariant,
    }

    sendKlaviyoEvent(email, store, true)
};