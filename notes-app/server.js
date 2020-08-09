console.log('Node Server is running on Android!');
var http = require('http');
http.createServer(function (req, res) {
	if (req.method === 'GET') {
		res.write('Hello World, Welcome to WeJapa Internships.')}
	else if (req.method === 'POST') {
		var name = window.prompt('what is your name?')
		res.write(`Hello ${name}, Welcome to WeJapa Internship`)};
	res.end();
}).listen(3000, 'localhost');
	
