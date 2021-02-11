import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import { sendKlaviyoEvent, Email } from './klaviyoEvent';
import Store from '../db/models/Store';
import Cart from '../db/models/Cart';
import ProductVariant from '../db/models/ProductVariant';

export const klaviyoPing: Task = async (inPayload: any, { addJob, withPgClient }) => {
    const store: Store = inPayload['payload'] as Store

    const productVariant = ProductVariant.build({
        id: 'product_xyz',
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
        rawJson: '{"id":16949515223198,"token":"113a3cbe6ef8c0b7788989a05677cb6e","cart_token":"93a8bfac17819e9be80cdb15957cb37e","email":"stevenpetterutijr@gmail.com","gateway":null,"buyer_accepts_marketing":false,"created_at":"2020-11-22T19:27:20-05:00","updated_at":"2021-01-13T17:46:38-05:00","landing_site":"/admin/oauth/request_grant?client_id=1a591de296e9417b74434e7a76d4d4c9&grant_options[]=per-user&redirect_uri=https://38795aa20b01.ngrok.io/auth/callback&scope=write_products,write_customers,write_draft_orders&state=160566994271100","note":null,"note_attributes":[],"referring_site":"","shipping_lines":[],"taxes_included":false,"total_weight":0,"currency":"USD","completed_at":null,"closed_at":null,"user_id":null,"location_id":null,"source_identifier":null,"source_url":null,"device_id":null,"phone":null,"customer_locale":"en","line_items":[{"applied_discounts":[],"key":"ed28bb9502c90c2dbfa6bd3255a2291b","destination_location_id":2510254604446,"fulfillment_service":"oberlo","gift_card":false,"grams":0,"origin_location_id":2510254178462,"presentment_title":"Drunk Deer Wine Rack","presentment_variant_title":"blue","product_id":5922504278174,"properties":[],"quantity":1,"requires_shipping":true,"sku":"11760546-blue","tax_lines":[],"taxable":false,"title":"Drunk Deer Wine Rack","variant_id":37019409973406,"variant_title":"blue","variant_price":"14.40","vendor":"zeiger-5","user_id":null,"unit_price_measurement":{"measured_type":null,"quantity_value":null,"quantity_unit":null,"reference_value":null,"reference_unit":null},"rank":null,"compare_at_price":null,"line_price":"14.40","price":"14.40"}],"name":"#16949515223198","source":null,"abandoned_checkout_url":"https://zeiger-5.myshopify.com/51333660830/checkouts/113a3cbe6ef8c0b7788989a05677cb6e/recover?key=0317f71443c289eea1ffc223067f3b6e","discount_codes":[],"tax_lines":[],"source_name":"web","presentment_currency":"USD","total_discounts":"0.00","total_line_items_price":"14.40","total_price":"14.40","total_tax":"0.00","subtotal_price":"14.40","total_duties":null,"shipping_address":{"first_name":"Steven","address1":"110 Beverly Street","phone":null,"city":"BOSTON","zip":"02114","province":"Massachusetts","country":"United States","last_name":"Petteruti","address2":"Apt 1001","company":null,"latitude":42.3655068,"longitude":-71.0598409,"name":"Steven Petteruti","country_code":"US","province_code":"MA"},"customer":{"id":4280363155614,"email":"stevenpetterutijr@gmail.com","accepts_marketing":false,"created_at":"2020-11-22T19:27:44-05:00","updated_at":"2020-11-22T19:27:44-05:00","first_name":"Steven","last_name":"Petteruti","orders_count":0,"state":"disabled","total_spent":"0.00","last_order_id":null,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":null,"tags":"","last_order_name":null,"currency":"USD","accepts_marketing_updated_at":"2020-11-22T19:27:44-05:00","marketing_opt_in_level":null,"tax_exemptions":[],"admin_graphql_api_id":"gid://shopify/Customer/4280363155614","default_address":{"id":4953290309790,"customer_id":4280363155614,"first_name":"Steven","last_name":"Petteruti","company":null,"address1":"110 Beverly Street","address2":"Apt 1001","city":"BOSTON","province":"Massachusetts","country":"United States","zip":"02114","phone":null,"name":"Steven Petteruti","province_code":"MA","country_code":"US","country_name":"United States","default":true}}}',
    })

    cart.setDataValue('products', [productVariant])
    // await cart.$set('products', [productVariant])


    const email: Email = {
        email: 'stevenpetterutijr@gmail.com',
        // price_old: '200.00',
        // price_new: '150.00',
        cart: cart,
        deltas: [],
        // productVariant: productVariant,
    }

    sendKlaviyoEvent(email, store)
};