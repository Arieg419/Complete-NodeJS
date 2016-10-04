class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

var person1 = new Person('andrew');
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));