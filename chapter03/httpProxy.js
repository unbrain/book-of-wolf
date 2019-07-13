const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/remote') {
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });
    return res.end('Hello Remote Page\n');
  } else {
    proxy(req, res);
  }
})

function proxy(req, res) {
  let options = {
    host: req.host,
    port: 3000,
    headers: req.headers,
    path: '/remote',
    agent: false,
    methods: 'Get'
  };

  let httpProxy = http.request(options, response => {
    res.end('Hello Page\n');
    response.pipe(res);
  });

  req.pipe(httpProxy);
}

app.listen(3000, function () {
  const PORT = app.address().port
  console.log(`server is running at http://localhost:${PORT}`);
})