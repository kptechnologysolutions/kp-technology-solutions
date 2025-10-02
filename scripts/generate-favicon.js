const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const browser = await puppeteer.launch({ headless: true });
  
  try {
    const page = await browser.newPage();
    
    // Create a simple HTML page with the SVG
    const svgContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'favicon.svg'), 'utf8');
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          margin: 0; 
          padding: 0; 
          width: 32px; 
          height: 32px; 
          background: transparent;
        }
        svg { 
          width: 32px; 
          height: 32px; 
        }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>`;
    
    await page.setContent(html);
    await page.setViewport({ width: 32, height: 32, deviceScaleFactor: 1 });
    
    // Generate 32x32 favicon
    await page.screenshot({
      path: path.join(__dirname, '..', 'public', 'favicon-32.png'),
      type: 'png',
      omitBackground: true,
      clip: { x: 0, y: 0, width: 32, height: 32 }
    });
    
    // Generate 192x192 for mobile
    await page.setViewport({ width: 192, height: 192, deviceScaleFactor: 1 });
    await page.setContent(html.replace(/32px/g, '192px'));
    await page.screenshot({
      path: path.join(__dirname, '..', 'public', 'icon-192.png'),
      type: 'png',
      omitBackground: true,
      clip: { x: 0, y: 0, width: 192, height: 192 }
    });
    
    console.log('Generated favicon-32.png and icon-192.png');
    
  } catch (error) {
    console.error('Error generating favicon:', error);
  } finally {
    await browser.close();
  }
}

generateFavicon();