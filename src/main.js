const app = require('./app');
const fs = require('fs');
const path = require("path")
require('./app/database');

const config = require('./app/config');

app.use(ctx => {
  ctx.type = "html";
  console.log("2222");
  ctx.body = fs.readFileSync(path.resolve(__dirname, "./src/pages/index.html"));
}).listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功~`);
});
