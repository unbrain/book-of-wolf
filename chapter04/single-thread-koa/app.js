const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if (ctx.path === '/good') {
    return ctx.body = 'good';
  }
  fs.readFile('./1.js', (err, data) => {
    if (err) throw err;
    console.log(data);
    ctx.body = 'hello Koa'
  })
}).listen(3000)

process.on('uncaughtException', (err) => {
  console.log(err);
})