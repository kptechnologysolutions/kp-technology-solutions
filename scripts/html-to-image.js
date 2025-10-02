const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHTMLToImage(htmlPath, outputPath, width = 1200, height = 630) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width,
      height,
      deviceScaleFactor: 2 // Higher resolution for better quality
    }
  });

  try {
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Take screenshot
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width,
        height
      }
    });
    
    console.log(`Generated: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error generating ${outputPath}:`, error);
  } finally {
    await browser.close();
  }
}

async function generateAllImages() {
  const socialDir = path.join(__dirname, '..', 'public', 'images', 'social');
  
  const htmlFiles = [
    'og-image-main.html',
    'og-image-services.html', 
    'og-image-portfolio.html'
  ];

  for (const htmlFile of htmlFiles) {
    const htmlPath = path.join(socialDir, htmlFile);
    const pngFile = htmlFile.replace('.html', '.png');
    const pngPath = path.join(socialDir, pngFile);
    
    if (fs.existsSync(htmlPath)) {
      await convertHTMLToImage(htmlPath, pngPath);
    } else {
      console.log(`HTML file not found: ${htmlFile}`);
    }
  }
  
  console.log('All social media images generated successfully!');
}

// Check if puppeteer is available, if not provide instructions
try {
  require.resolve('puppeteer');
  generateAllImages();
} catch (error) {
  console.log('Puppeteer not found. To generate images automatically, run:');
  console.log('npm install --save-dev puppeteer');
  console.log('');
  console.log('Alternatively, you can:');
  console.log('1. Open the HTML files in public/images/social/ in a browser');
  console.log('2. Take screenshots at 1200x630 resolution');
  console.log('3. Save as PNG files with the same names (replace .html with .png)');
}