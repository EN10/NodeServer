const http = require('http');

server = http.createServer((req, res) => {
  res.end('Hello World\n');
}).listen(80);