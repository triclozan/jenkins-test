var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(9337, function (err) {
  console.log(err);
});
console.log('Server running at http://127.0.0.1:9337/');
