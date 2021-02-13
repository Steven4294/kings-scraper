import { Task, quickAddJob, WithPgClient } from "graphile-worker";
import Store from '../db/models/Store';
import { GraphQLClient } from 'graphql-request';
const https = require('https');
const JsonlParser = require('stream-json/jsonl/Parser');

const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

const graphqlQuery = `
query {
    currentBulkOperation {
      id
      status
      errorCode
      createdAt
      completedAt
      objectCount
      fileSize
      url
      partialDataUrl
    }
  }
`

export const getProductsPoll: Task = async (inPayload: any, { addJob, withPgClient }) => {

    // test(withPgClient)
    // return;
    const store: Store = inPayload['payload'] as any;
    const accessToken = store.accessToken
    const storeURL = store.name

    const endpoint = `https://${storeURL}/admin/api/2020-10/graphql.json`
    const client = new GraphQLClient(endpoint, { headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    } })

    const data = await client.request(graphqlQuery, '')
    const status = data.currentBulkOperation.status
    console.log(`${status}`)
    if (status === 'CREATED' || status === 'RUNNING') {
        const date = new Date((new Date()).getTime() + 1.0*60000)
        console.log(`   >>> QUEUEING another GetProductsPoll() @ ${date}`)

        await quickAddJob(
            { connectionString: uri },
            "getProducts", // Task identifier
            { payload: store }, // payload
            {
                runAt: date
            }
        );
    } else {
        const url = data.currentBulkOperation.url
        downloadJSONL(url, withPgClient)

        await quickAddJob(
            { connectionString: uri },
            "abandonedCheckouts", // Task identifier
            { store: store }, // payload
        );
    }
};

function downloadJSONL(url: any, withPgClient: WithPgClient) {
    https.get(url, (resp: { pipe: (arg0: any) => any; }) => {
        const jsonlParser = new JsonlParser();
        const pipeline = resp.pipe(jsonlParser)
        var count = 0
        pipeline.on('data', (data: { value: any; }) => {
            count++
            result = result + JSON.stringify(data.value) + ","
        });
        var result = ''
        pipeline.on('end', () => {
            result = result.slice(0, -1); 
            result = `[${result}]`
            console.log(`object count ${count}`)
            saveData(result, withPgClient)
        });
    })
}

const store: Store = new Store({id: 'zeiger-5.myshopify.com', name: 'zeiger-5.myshopify.com', accessToken: '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'})

// TODO: fix
// Error [ERR_STREAM_WRITE_AFTER_END]: write after end
// at writeAfterEnd (_stream_writable.js:243:12)
// at JsonlParser.Writable.write (_stream_writable.js:291:5)
async function saveData(data: string, withPgClient: WithPgClient) {
    await withPgClient((pgClient) => {
        return pgClient.query(`insert into "ProductVariants" (id, price, "imgSrc", "title", "handle", "createdAt", "updatedAt") select a->>'id', a->>'price', a#>>'{product,featuredImage,originalSrc}', a#>>'{product,title}', a#>>'{product,handle}', now(), now() from json_array_elements($1::json) a on conflict (id) do update set price = excluded.price, "updatedAt" = now(), "imgSrc" = excluded."imgSrc"`, [data])}
    );
}

function test(withPgClient: WithPgClient) {
    const mockData = '[{"id":"gid:\/\/shopify\/ProductVariant\/36986010435742","price":"13.00","product":{"featuredImage":{"originalSrc":"https:\/\/cdn.shopify.com\/s\/files\/1\/0513\/3366\/0830\/products\/ScreenShot2020-10-28at8.33.16PM.png?v=1606090995"}}},{"id":"gid:\/\/shopify\/ProductVariant\/36986010468510","price":"21.00","product":{"featuredImage":{"originalSrc":"https:\/\/cdn.shopify.com\/s\/files\/1\/0513\/3366\/0830\/products\/ScreenShot2020-10-28at8.33.16PM.png?v=1606090995"}}}]'

    saveData(mockData, withPgClient)
} 