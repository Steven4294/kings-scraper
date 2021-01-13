import * as schedule from "node-schedule";
import Store from '../db/models/Store'
const { run, quickAddJob } = require("graphile-worker");
const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

class job {

    constructor() { }

    public shopRefresh() {
        var rule = new schedule.RecurrenceRule();
        // rule.dayOfWeek = [0, new schedule.Range(0, 6)];
        rule.second = 1;
        //rule.minute = 0;
        console.log(`shop referesh called`)
        schedule.scheduleJob('0 0 * * * *', async () => {
            const stores = await Store.findAll()
            stores.map(async store => {
                await quickAddJob(
                    { connectionString: uri },
                    "installStore", // Task identifier
                    { payload: store }, // payload
                );
            })
        });
    }
}

export default new job();