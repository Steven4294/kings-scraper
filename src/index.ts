require('@babel/polyfill');

import { sequelize } from './db'
import Store from './db/models/Store'
const { run, quickAddJob } = require("graphile-worker");
require('chromedriver');
var webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
import job from './cron'
const chrome = require('selenium-webdriver/chrome');
import * as schedule from "node-schedule";
const request = require('request')

let options = new chrome.Options();
options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

//Don't forget to add these for heroku
options.addArguments("--headless");
options.addArguments("--disable-gpu");
options.addArguments("--no-sandbox");


let driver = new webdriver.Builder()
	.forBrowser('chrome')
	.setChromeOptions(options)
	.setChromeService(serviceBuilder)
	.build();


// var driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .build();


// const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

// sequelize.sync()

console.log(`running ts worker`)
// add
async function main() {
    // const runner = await run({
    //     connectionString: uri,
    //     concurrency: 5,
    //     maxPoolSize: 10,
    //     noHandleSignals: false,
    //     pollInterval: 1000,

    //     taskList: {
	// 		helloWorld: async () => {
	// 			console.log('')
	// 			console.log('hello world is called!!!')
	// 			console.log('')
	// 		}
    //     }
    // });


 
}


const username = 'Eugene L'
const password = '123'
const url = 'https://kingsclubpkr.com/'

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function helloWorld() {
  try {
	await driver.get(url);
	await driver.findElement(By.xpath('/html/body/div[19]/div[1]/div/input[1]')).sendKeys(username)
	await driver.findElement(By.xpath('/html/body/div[19]/div[1]/div/input[2]')).sendKeys(password, Key.RETURN)
	await delay(500)
	const playButton = await driver.findElement(By.xpath('/html/body/div[21]/div[1]/div/span[2]'))
	await delay(500)
	playButton.click()
	// await delay(2000)
	const closeButton = await driver.findElement(By.xpath('/html/body/div[6]/div[3]/span'))
	// await delay(2000)
	closeButton.click()
	 await delay(200)

	const results = await getTables_v2()
	// await getTables()

	var options = {
		'method': 'POST',
		'url': 'https://zeiger-whalewatcher.herokuapp.com/message',
		'headers': {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({"message":`${results}`})  
	};
	request(options);

	  
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
		
	}
}

async function getTables_v2() {

	const arr = Array.from({length: 10}, (_, i) => i + 1) // [1, 2, .., N]
	arr.map(async r => {
		await delay(1000)
		console.log('test mcgee')
	})
	var results: String[] = []
	const r1 = await getTable(1, true)
	const r2 = await getTable(2)
	const r3 = await getTable(3)
	const r4 = await getTable(4)
	const r5 = await getTable(5)
	const r6 = await getTable(6)
	const r7 = await getTable(7)
	const r8 = await getTable(8)

	const arrs = [r1, r2, r3, r4, r5, r6, r7, r8]
	arrs.map(elem => {
		results = results.concat(elem)
	})
	console.log(`~~~~~~~~`)
	console.log(results)
	return new Promise<String[]>((resolve, reject) => {
		resolve(results)
	})
}

async function getTable(index: number, isFirst = false): Promise<String[]> {
	await driver.findElement(By.xpath(`/html/body/div[14]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()
	if (isFirst) {
		await delay(1200)
	} else { await delay(400) }
	await driver.findElement(By.xpath(`/html/body/div[14]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()
	await delay(100)
	await driver.findElement(By.xpath(`/html/body/div[14]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()

	return getScreennames()
}

async function getTables() {
	// const arr = Array.from({length: 10}, (_, i) => i + 1) // [1, 2, .., N]
	// const promises = arr.map(async n => {
	// 	await getTable(n)
	// })
	// await Promise.all(promises)
	const r1 = await getTable(1)
	await getTable(2)
	await getTable(3)
	await getTable(4)
	await getTable(5)
	await getTable(6)

}

function getScreennames(): Promise<String[]> {
	return new Promise<String[]>((resolve, reject) => {
		const results: String[] = []
		const x1 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[1]/span[1]'
		const x2 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[2]/span[1]'
		const x3 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[3]/span[1]'
		const x4 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[4]/span[1]'
		const x5 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[5]/span[1]'
		const x6 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[6]/span[1]'
		const x7 = '/html/body/div[14]/div[7]/div[2]/div[2]/div/div[1]/div[7]/span[1]'
		const arr = [x1, x2, x3, x4, x5, x6, x7]

		arr.map(async xpath => {
		try {
			const elem = await driver.findElement(By.xpath(xpath))
			const text = await elem.getText()
			results.push(text)
		} finally {
		}
		})
		resolve(results)

	});


}





main().catch((err) => {
	console.error(err);
    process.exit(1);
}).then(() => {
	schedule.scheduleJob('* * * * *', async () => {
		helloWorld()
	});
})

