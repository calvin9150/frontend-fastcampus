const axios = require("axios");
const cheerio = require("cheerio");

axios.get("http://example.com").then((response) => {
  const htmlString = response.data;
  const $ = cheerio.load(htmlString);
  const h1 = $("h1").text();
  const href = $("a").text();
  console.log(h1);
  console.log(href);
});
