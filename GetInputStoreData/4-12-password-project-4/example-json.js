var person = {
	name: 'Andrew',
	age: 24
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Halley"}';

// convert to js object
var animalObject = JSON.parse(animal);

// add age prop
animalObject.age = 1;

// convert back to JSON
animal = JSON.stringify(animalObject);

// log out
console.log(animal);