import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import { sendKlaviyoEvent, Email } from './klaviyoEvent';
import Store from '../db/models/Store';
import Cart from '../db/models/Cart';
import ProductVariant from '../db/models/ProductVariant';

export const klaviyoPing: Task = async (inPayload: any, { addJob, withPgClient }) => {
    const store: Store = inPayload['payload'] as Store
    console.log('')
    console.log('')
    console.log(store.klaviyoAPIKey)
    console.log('')
    console.log('')

    const cart = Cart.build({
        id: 'cart_xyz',
        abandoned_checkout_url: 'https://zeiger-5.myshopify.com/51333660830/checkouts/113a3cbe6ef8c0b7788989a05677cb6e?_ke=eyJrbF9jb21wYW55X2lkIjogIlRpbXZuUiIsICJrbF9lbWFpbCI6ICJzdGV2ZW5wZXR0ZXJ1dGlqckBnbWFpbC5jb20ifQ%3D%3D',
        email: 'test_mcgee@gmail.com',
        products: [ ],
    })

    const productVariant = ProductVariant.build({
        id: 'product_xyz',
        price: '100.00',
        imgSrc: 'https://i.picsum.photos/id/490/200/300.jpg?hmac=8hYDsOwzzMCthBMYMN9bM6POtrJfVAmsvamM2oOEiF4',
        handle: 'this-is-a-handle',
        title: 'Deer handler [Klaviyo Ping]',
        carts: [ ],
    })

    const email: Email = {
        email: 'stevenpetterutijr@gmail.com',
        price_old: '200.00',
        price_new: '150.00',
        cart: cart,
        productVariant: productVariant,
    }

    sendKlaviyoEvent(email, store)
};