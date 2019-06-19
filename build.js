const fs = require("fs");
const mkdirp = require("mkdirp");

mkdirp.sync(__dirname + "/dist/client");
mkdirp.sync(__dirname + "/dist/server");

fs.writeFileSync(
  __dirname + "/dist/client/index.html",
  `<script src="/dist/main.js"></script>`
);

fs.writeFileSync(
  __dirname + "/dist/client/main.js",
  `console.log("Hello, Client!")`
);

fs.writeFileSync(
  __dirname + "/dist/server/index.js",
  `
    const fs = require("fs");
    const path = require("path");
    // just require something from node_modules
    const mkdirp = require("mkdirp");

    module.exports = {
      "default": (_, res) => {
        const htmlFile = path.join(__dirname, "../client/index.html")
        const html = fs.readFileSync(htmlFile, "utf-8");
        res.end(html);
      }
    }
  `
);
