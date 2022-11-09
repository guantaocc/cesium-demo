const express = require("express");

const app = express();

const compression = require("compression");

app.use(compression());

app.use((req, res, next) => {
  // 代理服务文件
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname));

const port = 3000;

let server = app.listen(port, () => {
  console.log("listen at http://127.0.0.1:%s", port);
});

server.on("close", () => {
  console.log("closed");
});
