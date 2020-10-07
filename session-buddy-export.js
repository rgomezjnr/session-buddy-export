const chromeLauncher = require('chrome-launcher');
const axios = require('axios');
const puppeteer = require('puppeteer-core');

const DELAY = 1000;

(async () => {
    const chrome = await chromeLauncher.launch({
        chromeFlags: ['--headless']
    });
    const response = await axios.get(`http://localhost:9222/json/version`);
    const { webSocketDebuggerUrl } = response.data;

    const browser = await puppeteer.connect({
        browserWSEndpoint: webSocketDebuggerUrl
    });

    const page = await browser.newPage();
    await page.waitForTimeout(DELAY);
    await page.goto('chrome-extension://edacconmaakjimmfgnblocblbcdcpbko/main.html');

    await page.click('#btnConfigure');                  // Settings button
    await page.click('#menuItemExport');                // Export button
    await page.click('#tabGroup_tab_ExportHTML');       // HTML button
    await page.waitForTimeout(DELAY);
    await page.click('#sessionExport_Scope');           // Session scope dropdown button
    await page.waitForTimeout(DELAY);
    await page.select('#sessionExport_Scope', 'all');   // Set option value to 'all'
    await page.waitForTimeout(DELAY);

    const sessionExportText = await page.$eval('#sessionExportText', textarea => textarea.value);
    console.log(sessionExportText);

    await page.close();
    browser.disconnect();
    await chrome.kill();
})();