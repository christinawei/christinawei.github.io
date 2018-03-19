var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
	res.sendfile('html/index.html')
})
app.listen(port, function() {
	console.log("Server started, listening on port "+port);
});
