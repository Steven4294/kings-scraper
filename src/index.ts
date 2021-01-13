require('@babel/polyfill');

import { sequelize } from './db'
import { getProductsPoll } from './tasks/getProductsPoll'
import { installStore } from './tasks/installStore';
import Store from './db/models/Store'
import { klaviyoEvent } from './tasks/klaviyoEvent';
import ProductVariant from './db/models/ProductVariant';
import { abandonedCheckoutsTask } from './tasks/abandonedCheckouts';
const { run, quickAddJob } = require("graphile-worker");
import job from './cron'
import { klaviyoPing } from './tasks/klaviyoPing';

const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

sequelize.sync()

console.log(`running ts worker`)
// add
async function main() {
    const runner = await run({
        connectionString: uri,
        concurrency: 5,
        maxPoolSize: 10,
        noHandleSignals: false,
        pollInterval: 1000,

        taskList: {
            productUpdate: async (payload: { productVariantDic: any; domain: any; }, helpers: any) => {
              	const { productVariantDic, domain } = payload;            
			  	const ids = productVariantDic.map((variant: { id: any; }) => variant.id)
				const variants: ProductVariant[] = await ProductVariant.findAll({
					where: {
						id: ids
					}
				})

				if (variants.length === 0) {
					productVariantDic.map((variant: any) => {
						ProductVariant.create({
							id: variant.id,
							price: variant.price
						})
					})
				}

				const store = await Store.findOne({
					where: {
						id: domain
					}
				})

				const oldDic = variants.map(v => {return { id: v.id, price: v.price }})
				const deltas = oldDic.map(v => {
				 	const matches = productVariantDic.filter((v2: { id: string; }) => v2.id === v.id)
				  	if (matches === undefined || matches.length === 0) { return }
					const match = matches[0]
					const newPrice = parseFloat(match.price)
					const oldPrice = parseFloat(v.price);

					const condition = newPrice < oldPrice
					if (shouldSendKlaviyoEmail(store!, newPrice, oldPrice)) {
						console.log(`PRICE DROP: ${v.id} ${oldPrice} -> ${newPrice}`)
						return {
							id: match.id,
							price_old: v.price,
							price_new: match.price,
						}
					} else {
						// it was a price hike!
						ProductVariant.update({
							price: match.price
						}, {
							where: { id: match.id },
						})
					}
				}).filter(v => v !== undefined)
				if (deltas.length === 0) { return }


				// logic to see if we should send the klaviyo event
					await quickAddJob( 
						{ connectionString: uri },
						"sendKlaviyoEvents", // Task identifier
						{ 
							payload: {
								store: store,
								deltas: deltas,
							}
						});
				

            },
            getProducts: getProductsPoll,
            installStore: installStore,
			sendKlaviyoEvents: klaviyoEvent,
			klaviyoPing: klaviyoPing,
			abandonedCheckouts: abandonedCheckoutsTask
        }
    });

	setTimeout(async () => {
		const stores = await Store.findAll()
		stores.map(async store => {
			// await quickAddJob(
			// 	{ connectionString: uri },
			// 	"klaviyoPing", // Task identifier
			// 	{ payload: store }, // payload
			// );
		})

	}, 1000)

    // setTimeout(async () => {

	// const store: Store = new Store({id: 'zeiger-5.myshopify.com', name: 'zeiger-5.myshopify.com', accessToken: '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'})
	// console.log(` >>> SHOULD BE INIT() JOBS <<<`)
    // await quickAddJob(
    //     { connectionString: uri },
    //     "installStore", // Task identifier
    //     { payload: store }, // payload
    // );

    // }, 1000)
}

function shouldSendKlaviyoEmail(store: Store, newPrice: number, oldPrice: number) {
	const diff = Math.abs(newPrice - oldPrice)
	const percentDiff = (diff / oldPrice) * 100.0

	const b1 = diff >= (store.limitAmount ? store.limitAmount : 10)
	const b2 = percentDiff >= (store.limitPercent ? store.limitPercent : 10)
	if (store.amountAndPercent === true) {
		// AND
		return b1 && b2
	} else {
		// OR
		return b1 || b2
	}
}

job.shopRefresh()

main().catch((err) => {
	console.error(err);
    process.exit(1);
});