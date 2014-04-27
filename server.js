var http = require('http'),
    express = require('express');
var port = process.env.port || 1234;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);