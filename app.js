/*
 * @Date         : 2020-04-10 10:59:48
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-04-10 14:40:47
 * @FilePath     : \app.js
 */
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dir = require('./src/add.js');
const config = {
  host: "localhost",
  port: 3000
}

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
  else next();
});
app.use(bodyParser.json())
app.post('/html', async function (req, res) {
  console.log(req.body);
  await dir.adds(req.body.name)
  res.send('保存成功');
});

app.listen(config.port, config.host, () => {
  console.log(`Web App listening at http://${config.host}:${config.port}`)
});