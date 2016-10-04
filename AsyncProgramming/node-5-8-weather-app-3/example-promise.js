// function doWork (data, callback) {
// 	callback('done');
// 	callback('done second')
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			reject('everything is broken!');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });

var request = require('request');

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f022c87eb60b13e1cc301da5c27ee3e2&q=' + encodedLocation + '&units=imperial';

		if (!location) {
			return reject('No location provided'); // Promise cannot be fulfilled.
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) { // this is a cb function for request. will not run until after data returns.
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}

getWeather('san francisco').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});
