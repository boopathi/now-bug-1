const fs = require("fs");
const mkdirp = require("mkdirp");

mkdirp.sync(__dirname + "/dist/client");

fs.writeFileSync(
  __dirname + "/dist/index.html",
  `<script src="/dist/main.js"></script>`
);

fs.writeFileSync(
  __dirname + "/dist/client/main.js",
  `console.log("Hello, Client!")`
);

fs.writeFileSync(
  __dirname + "/dist/server.js",
  `module.exports = { "default": () => "Server" }`
);
