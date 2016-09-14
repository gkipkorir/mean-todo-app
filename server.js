var express = require('express');
var app = express();

var PORT = process.env.port || 3000; 

app.all('/*', function(req, res){
	res.send('\
		<!DOCTYPE html>\
		<head>\
			<title> My MEAN TODO app</title>\
		</head>\
		<body>\
			<h1> This Is My MEAN TODO app!</h1>\
		</body>\
		</html>\
		');
});

app.listen(PORT, function(){
	console.log('Server is running on ' + PORT);
});