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
// const proxy = 'fixie:SeN2772qjHvGkaR@velodrome.usefixie.com:80'
// options.addArguments(`--proxy-server=https://${proxy}`)


let driver = new webdriver.Builder()
	.forBrowser('chrome')
	.setChromeOptions(options)
	.setChromeService(serviceBuilder)
	.build();

 

async function main() {

 
 }
// a sid: ACb63a2c5452d7cb241482a3fcb27e21c1
// auth: 823fd52afe70888c39873c2286d0eff3

// curl 'https://api.twilio.com/2010-04-01/Accounts/ACb63a2c5452d7cb241482a3fcb27e21c1/Messages.json' -X POST \
// --data-urlencode 'To=+14016880688' \
// --data-urlencode 'MessagingServiceSid=MGbabec57d878f8deb97ff98f31ea8188c' \
// --data-urlencode 'Body=test' \
// -u ACb63a2c5452d7cb241482a3fcb27e21c1:823fd52afe70888c39873c2286d0eff3

interface WhaleWatcherPlayer {
	name: String
    table: String
    stakes: String
}


function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

const arr = ['JohnA1', 'JohnC1', 'JohnT1', 'JohnE1', 'JohnF1', 'JohnG2']

const n = getRandomInt(5)
const username = arr[n]
console.log(username)
const password = 'pw'
const url = 'https://kingsclubpkr.com/'
const base = 'https://api.getwhalewatcher.com'
// const base = 'http://127.0.0.1:8080'
const post_url = `${base}/message`


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

 

async function loadKings() {
  try {


	console.log('attempting to load bovada')
	await driver.get('https://www.bovada.lv/?overlay=login');
 // https://www.bovada.lv/?overlay=login
 console.log('loaded bovada')

// 	await delay(3500)
// // // /html/body/div[18]/div[1]/div/input[1]
await delay(34000)

// const email = 'sunnymonkey00@gmail.com'
const email = 'mmcintir1@yahoo.com'
// const email = 'patmcnamara2000@gmail.com'
const pw = 'DKj1idsKj!43'
	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/bx-form-group/div/bx-input-field-container[1]/div/input')).sendKeys(email)
		await delay(1000)

	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/bx-form-group/div/bx-input-field-container[2]/div/input')).sendKeys(pw)
// // 	// /html/body/div[20]/div[1]/div/span[2]
// 	console.log('PROCEEDING')
await delay(1000)

	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/div[2]/button')).sendKeys('webdriver', Key.RETURN)	
	await delay(25000)

console.log('attempted invalid pw')
	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/div[3]/button')).sendKeys('webdriver', Key.RETURN)	

	await delay(25000)

	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/div[3]/button')).sendKeys('webdriver', Key.RETURN)	
	await delay(25000)
	await driver.findElement(By.xpath('/html/body/bx-site/bx-overlay-ch/bx-overlay/div/div/bx-login-overlay/bx-overlay-container/div/bx-overlay-body/section/bx-login-placeholder/bx-login/div/bx-form/form/div[3]/button')).sendKeys('webdriver', Key.RETURN)	

    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
		
	}
}

 


main().catch((err) => {
	console.error(err);
    process.exit(1);
}).then(async () => {
	await loadKings()

	// var initial = true
	// // schedule.scheduleJob(`${n*10} * * * * *`, async () => {
	// // 	//every 40 seconds
	// // 	console.log(initial)
	// // 	await scrapeKings(initial)
	// // 	initial = false
	// // });
})
