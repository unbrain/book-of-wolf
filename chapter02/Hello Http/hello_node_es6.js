// 'use strict'
const http = require('http')

http.createServer((req, res) => {
  let status = 200;
  res.writeHead(status, {
    'Content-Type': 'text/plain'
  });
  res.end('hell es6!');
}).listen(3000, '127.0.0.1');

console.log('server is running at http://localhost:3000');
