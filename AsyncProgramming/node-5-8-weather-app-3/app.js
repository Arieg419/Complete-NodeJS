var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');

	weather(argv.l).then(function (currentWeather) { // Working with Promises!
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	})
} else {
	console.log('Location was not provided');

	// Guess location with ipinfo.io :)
	location().then(function (loc) { // Working with Promises!
		return weather(loc.city);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error)
	});
}
