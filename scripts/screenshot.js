// Minimal Puppeteer script to capture a full-page screenshot of the built site
const { exec } = require('child_process');
const fs = require('fs');

async function waitForServer(url, retries = 60, intervalMs = 1000) {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (_) {}
    await new Promise(r => setTimeout(r, intervalMs));
  }
  throw new Error('Server did not start in time');
}

async function main() {
  const port = process.env.PREVIEW_PORT || 5173;
  const url = `http://localhost:${port}/`;

  // Start a lightweight static server for the dist folder
  const server = exec(`npx http-server dist -p ${port} --silent`);

  try {
    await waitForServer(url, 90, 1000);
    const puppeteer = await import('puppeteer');
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });

    // Navigate to Projects section
    await page.evaluate(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(1000);

    const outDir = 'screenshots';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
    const outPath = `${outDir}/homepage.png`;
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved screenshot to ${outPath}`);

    await browser.close();
  } finally {
    server.kill();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


