import * as schedule from "node-schedule";
import Store from '../db/models/Store'

class job {

    constructor() { }

    public shopRefresh() {
        var rule = new schedule.RecurrenceRule();
        // rule.dayOfWeek = [0, new schedule.Range(0, 6)];
        rule.second = 1;
        //rule.minute = 0;
        console.log(`shop referesh called`)
        schedule.scheduleJob('0 * * * * *', async () => {
         
            const stores = await Store.findAll()
            stores.map(store => {
                const code = Math.floor(1000 + Math.random() * 9000);
   
                console.log(`~~~~~~~~~     store ${store.accessToken} ${code}`)
            })

        });
    }
}

export default new job();