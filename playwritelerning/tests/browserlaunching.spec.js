const {chromium} = require('playwright');

(async ()=>{const browser = await chromium.launch()

const context = await browser.newContext();
const page = await browser.newPage();
 

page.goto('http://example.com');

await browser.close();

})