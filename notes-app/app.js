//var url = require('url');
var fs = require('fs');
var readline = require('readline');


fs.readFile('notes.txt', 'utf-8',  function(err, data) {
	if (err) throw err;
	console.log(data);
});

//function handleGet() {}

//function handlePost() {}



//module.exports.handleGet = handleGet;
//module.exports.handlePost = handlePost;



