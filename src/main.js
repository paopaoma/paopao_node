const app = require('./app');
const fs = require('fs');
const path = require("path")
require('./app/database');

const config = require('./app/config');

app.use(ctx => {
  try {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(path.resolve(__dirname, "./pages/index.html"));
  } catch (err) {
    console.log(err);
  }
}).listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功~`);
});
