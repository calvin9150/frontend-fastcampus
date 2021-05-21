const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 1080,
  });

  await page.goto("https://www.tistory.com/category/it");
  const html = await page.content();
  // await page.screenshot({ path: "example.png" });
  // await browser.close();

  const $ = cheerio.load(html);
  let hrefArray = [];
  const articles = $("ul.list_tistory > li > a").each((index, element) => {
    const href = $(element.attr("href"));
    hrefArray.push(href);
  });
  console.log(articles);
  await browser.close();
})();
