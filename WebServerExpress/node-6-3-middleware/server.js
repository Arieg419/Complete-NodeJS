var express = require('express');
var app = express();
var PORT = 3000;

/*
One of the greatest features of NodeJS is how easy it is to implement middleware
into your application. Middleware makes it really easy to run a specific function
for all of your routes, or just for some.
*/

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next(); // without next middleware gets stuck, all GET requests will hang.
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

// Important to specify middleware uptop, otherwise will not run. This is application level Middleware.
// Will run for all routes requested / fired.
app.use(middleware.logger);

// route level Middleware is passed as second argument.
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
