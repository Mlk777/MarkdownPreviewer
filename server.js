const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 80;
app.listen(port);

console.log("server start" + port);