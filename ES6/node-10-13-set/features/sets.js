// var chatRooms = new Set();

// // Add
// chatRooms.add('Runners');
// chatRooms.add('Runners');
// chatRooms.add('Bikers');

// // Size
// console.log(chatRooms.size);

// // Has
// console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// // Delete
// // chatRooms.delete('Bikers');
// // chatRooms.clear();
// // console.log(chatRooms.size);

// chatRooms.add({name: 'Andrew'});

// // To array
// console.log([...chatRooms]);

// chatRooms.forEach(function (chatRoom) {
// 	console.log(`Found chat room: ${chatRoom}`);
// });

// Challenge area
var movies = new Set();

function addMovie (movieTitle) {
	if (movies.has(movieTitle)) {
        // Error
        console.log(`Error! ${movieTitle} already exists!`);
	} else {
		// Success
		movies.add(movieTitle);
		console.log(`Success! ${movieTitle} was added!`);
	}
}

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');