const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://brunch.co.kr/search");
  await page.click("input.txt_search");
  await page.keyboard.type("풀스택");
  await page.keyboard.press("Enter");

  //   await browser.close();
})();
