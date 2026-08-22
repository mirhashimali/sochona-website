const { chromium } = require("playwright");
const { google } = require("googleapis");

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function run() {
  let payload = {};
  try {
    payload = JSON.parse(process.env.CLIENT_PAYLOAD || "{}");
  } catch (e) {
    console.log("Could not parse payload, using defaults.");
  }

  const keyword = payload.keyword || "Plumbers";
  const location = payload.location || "Gurugram";

  console.log(`[+] Starting Search for Keyword: "${keyword}" in Location: "${location}"`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const searchQuery = encodeURIComponent(`${keyword} in ${location}`);
  await page.goto(`https://www.google.com/maps/search/${searchQuery}`);

  await page.waitForTimeout(5000);

  // Scroll through results
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => {
      const pane = document.querySelector('div[role="feed"]');
      if (pane) pane.scrollTop += 2500;
    });
    await page.waitForTimeout(2000);
  }

  const listings = await page.$$('a[href*="/maps/place/"]');
  console.log(`[+] Found ${listings.length} listings.`);

  const newRows = [];

  for (let i = 0; i < Math.min(listings.length, 12); i++) {
    try {
      await listings[i].click();
      await page.waitForTimeout(2500);

      const name = await page.$eval("h1", (el) => el.textContent.trim()).catch(() => "");
      if (!name) continue;

      const phone = await page
        .$eval('button[data-item-id*="phone"]', (el) => el.textContent.trim())
        .catch(() => "");

      const website = await page
        .$eval('a[data-item-id="authority"]', (el) => el.href)
        .catch(() => "");

      let email = "";
      if (website) {
        try {
          const webPage = await browser.newPage();
          await webPage.goto(website, { timeout: 7000 });
          const content = await webPage.content();
          const emailMatch = content.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
          if (emailMatch) email = emailMatch[0];
          await webPage.close();
        } catch (e) {
          // Pass if website block/timeout
        }
      }

      const timestamp = new Date().toISOString().split("T")[0];
      
      // Row schema matching your Google Sheet: [Name, Email, Phone, Service, Timestamp, Status, AssignedTo]
      newRows.push([
        name,
        email,
        phone,
        keyword,
        timestamp,
        "New (Scraped)",
        "G-Maps Scraper Bot"
      ]);

      console.log(`[Extracted] ${name} | Phone: ${phone} | Email: ${email}`);
    } catch (err) {
      console.log(`Skipped listing ${i}:`, err.message);
    }
  }

  await browser.close();

  if (newRows.length > 0) {
    console.log(`[+] Appending ${newRows.length} new leads directly to Google Sheets...`);
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: newRows,
      },
    });
    console.log("[+] Save complete!");
  } else {
    console.log("[-] No leads extracted.");
  }
}

run();