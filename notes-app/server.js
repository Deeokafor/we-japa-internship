console.log('Node Server is Live!'); 

var http = require('http');
var app = require('./app');

http.createServer( function (req, res) {
	res.write('notes app server is live!');
	res.end();
}).listen(3000, 'localhost');

