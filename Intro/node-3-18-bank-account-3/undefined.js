// function greetUser(name)
function greetUser (name) {
	if (typeof name === 'undefined') {
		console.log('Hello world!');
	} else {
		console.log('Hello ' + name + '!');
	}
}

greetUser('Andrew');
greetUser();