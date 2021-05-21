const axios = require("axios");
const fs = require("fs");

const article = {};
const crawler = (pageNum) => {
  axios
    .get(
      `https://api.brunch.co.kr/v1/search/article?q=%ED%92%80%EC%8A%A4%ED%83%9D&page=${pageNum}&pageSize=20&highlighter=y&escape=y&sortBy=accu`
    )
    .then((response) => {
      const data = response.data;
      article[pageNum] = data.data.list.map((item) => {
        return {
          title: item.title,
          contentSummary: item.contentSummary,
          contentId: item.contentId,
        };
      });

      const nextNumber = pageNum + 1;
      console.log("현재 페이지 : ", pageNum);
      if (nextNumber < 10) {
        crawler(nextNumber);
        return;
      }
      fs.writeFile(
        "brunch_article.json",
        JSON.stringify(article),
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("success file write");
        }
      );
    });
};

crawler(1);
