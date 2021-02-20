import * as schedule from "node-schedule";

class job {

    constructor() { }

    public async runJob()  {
        // 
        schedule.scheduleJob('* * * * *', async () => {
            console.log('ping....')

        });
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve({}), ms)).then(()=>console.log("fired"));
    }
}

export default new job();