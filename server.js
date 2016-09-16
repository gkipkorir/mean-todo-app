var express = require('express');
var app = express();

var PORT = process.env.port || 3000; 

app.all('/*', function(req, res){
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title> My MEAN TODO app</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view> </div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
		');
});

app.listen(PORT, function(){
	console.log('Server is running on ' + PORT);
});