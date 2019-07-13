const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Contnt-Type': 'text/plain'
  });
  res.end('hello nodejs-server~\n');
}).listen(3000, '127.0.0.1')

console.log('server runing at http://localhost:3000/');
