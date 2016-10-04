// var name = 'Andrew';
// var a = 12;
// var b = 22;

// debugger;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
	debugger;
	res.json({
		status: 'good',
		data: req.body
	});
});

app.listen(3000);