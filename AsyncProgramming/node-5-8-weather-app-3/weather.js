var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		// converts spaces and other chars to proper URI format via correct encoding mechanism. ie. somesite.com/a%20goldberg
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f022c87eb60b13e1cc301da5c27ee3e2&q=' + encodedLocation + '&units=imperial';

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				// console.log(body);
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}
