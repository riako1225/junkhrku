var http = require('http');

var hostname = '127.0.0.1';
var port = process.env.PORT || 3000;

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello World\n');
// }).listen(port, hostname, function(){
}).listen(port, function(){
    // console.log("server running at http://" + hostname + ":" + port +"/");
    console.log("server running at http://oursite" + port +"/");
});