// var locations = [];

// locations.push({
// 	name: 'Philadelphia',
// 	weather: 22
// });

// locations.push({
// 	name: 'Mexico City',
// 	weather: 52
// });

// for (let location of locations) {
// 	console.log(`It's ${location.weather} in ${location.name}`);
// }

// Challenge area

function averageGrade (...grades) {
	var total = 0;

	for (let grade of grades) {
		total += grade;
	}

	return (total / grades.length)
}

var total = averageGrade(1, 44, 99);
console.log(total);