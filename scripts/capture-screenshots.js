const puppeteer = require('puppeteer');
const path = require('path');

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to the local development server (checking port from bash output)
    await page.goto('http://localhost:3003', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Desktop screenshot
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    await page.screenshot({
      path: path.join(__dirname, '..', 'public', 'images', 'social', 'screenshot-desktop.png'),
      type: 'png',
      fullPage: false
    });
    console.log('Generated: screenshot-desktop.png');

    // Mobile screenshot  
    await page.setViewport({ width: 375, height: 667, deviceScaleFactor: 2 });
    await page.screenshot({
      path: path.join(__dirname, '..', 'public', 'images', 'social', 'screenshot-mobile.png'),
      type: 'png',
      fullPage: false
    });
    console.log('Generated: screenshot-mobile.png');

  } catch (error) {
    console.error('Error capturing screenshots:', error);
    console.log('Make sure the development server is running on http://localhost:3000');
  } finally {
    await browser.close();
  }
}

captureScreenshots();