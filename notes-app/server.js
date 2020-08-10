console.log('Node Server is Live!'); 

var http = require('http');
var app = require('./app');
var port = 3000;
var hostname = 'localhost';

app = http.createServer( function (req, res) {
/*	
	if (req.method === 'GET') {
		return app.handleGet(req, res);
	} else if (req.method === 'POST') {
		return app.handlePost(req, res);
	}
*/

	res.write(`Server is live on port ${port} \n`);
	res.end(`You can interact with console now`);
}).listen(port, hostname);

