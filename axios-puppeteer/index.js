const axios = require("axios");
const cheerio = require("cheerio");

const article = {};
const crwaler = (pageNum) => {
  axios
    .get(
      `https://api.brunch.co.kr/v1/search/article?q=%ED%92%80%EC%8A%A4%ED%83%9D&page=${pageNum}&pageSize=20&highlighter=y&escape=y&sortBy=accu`
    )
    .then((response) => {
      const data = response.data;
      article[pageNum] = data.data.list;
      const nextNumber = pageNum + 1;
      console.log("현재 페이지 : ", pageNum);
      if (nextNumber < 10) {
        crwaler(nextNumber);
        return;
      }
      console.log(article);
    });
};

crwaler(1);
