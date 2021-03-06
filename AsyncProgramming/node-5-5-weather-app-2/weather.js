var request = require('request');

module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';

	if (!location) {
		return callback('No location provided');
	}

	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('Unable to fetch weather.'); // callback('') here is the anonymous func in app.js . The string passed is equivalent to currentWeather.
		} else {
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}
