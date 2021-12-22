import fs = require("fs");
import https = require("https");

const username = "hoxuanvinh1999";

const url = `https://dev.to/api/articles?username=<${username}>`;

export const readWrite = async () => {
  https.get(url, (res) => {
    res.setEncoding("utf8");
    let body = "" as any;
    res.on("data", (data) => (body += data));

    res.on("end", () => {
      body = JSON.parse(body);
      body = body.slice(0, 3);
      const articles = `\n - [${body[0].title}](${body[0].url})\n - [${body[1].title}](${body[1].url})\n - [${body[2].title}](${body[2].url})\n \n`;

      // Update README using FS
      fs.readFile("README.md", "utf-8", (err, data) => {
        if (err) {
          throw err;
        }

        const updatedMd = data.replace(
          /(?<=I'm writing:\n)[\s\S]*(?=\!\[Build)/gim,
          articles
        );

        fs.writeFile("README.md", updatedMd, "utf-8", (err) => {
          if (err) {
            throw err;
          }

          console.log("README update complete.");
        });
      });
    });
  });
};
