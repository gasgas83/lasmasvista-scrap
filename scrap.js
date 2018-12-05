const rp = require('request-promise');
const puppeteer = require('puppeteer');

let urlLN = "http://www.google.com.ar";


(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 926 })
    await page.goto(urlLN);
    // get hotel details
    await page.screenshot({ path: 'ejemplo.png' });

    let notasData = await page.evaluate((sel) => {
       console.log(sel);
    });

    console.dir(notasData);
    await browser.close();

})();