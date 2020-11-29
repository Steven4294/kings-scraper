require('@babel/polyfill');

import { sequelize } from './db'
import { getProductsPoll } from './tasks/getProductsPoll'
import { installStore } from './tasks/installStore';
import Store from './db/models/Store'
import { klaviyoEvent } from './tasks/klaviyoEvent';
const { run, quickAddJob } = require("graphile-worker");

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
			  
			  // TODO: fire off klaviyoEvent
            },
            getProducts: getProductsPoll,
            installStore: installStore,
            sendKlaviyoEvents: klaviyoEvent,
        }
    });


    setTimeout(async () => {
      console.log('')
      console.log('Adding Jobs')
      console.log('')

//       const stores = await Store.findAll();
//       const store = stores[0]
        // const store = {
        //     accessToken: "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",
        //     name: "zeiger-5.myshopify.com"
        // }


	const store: Store = new Store({id: 'zeiger-5.myshopify.com', name: 'zeiger-5.myshopify.com', accessToken: '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'})
	console.log(` >>> SHOULD BE INIT() JOBS <<<`)
    await quickAddJob(
        { connectionString: uri },
        "installStore", // Task identifier
        { payload: store }, // payload
    );
	// await quickAddJob(
	// 	{ connectionString: uri },
	// 	"getProducts", // Task identifier
	// 	{ payload: store }, // payload
	// );

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
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});