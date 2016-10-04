var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location', { // --location or -l
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help') // --help
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	weather(argv.l, function (currentWeather) {
		console.log(currentWeather);
	});
} else {
	console.log('Location was not provided');
	location(function (location) {
		if (location) {
			weather(location.city, function (currentWeather) {
				console.log(currentWeather);
			});
		} else {
			console.log('Unable to guess location');
		}
	});
}
