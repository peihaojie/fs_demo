/*
 * @Date         : 2020-04-09 20:26:45
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-04-10 14:44:25
 * @FilePath     : \src\add.js
 */
const fs = require('fs');
module.exports = {
  adds: value => {
    value = `<!DOCTYPE html><html lang="cmn"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>公众号</title></head><body>${value}</body></html>`
    fs.writeFile('./message.html', value, err => {
      return new Promise((res, rej) => {
        if (err) {
          return rej(err)
        } else {
          return res("'It\\'s saved!'")
        }
      })
      // fs.readFile('./message.html', 'utf-8', function (err, data) {
      //   console.log(data);
      // });
    })
  }
}