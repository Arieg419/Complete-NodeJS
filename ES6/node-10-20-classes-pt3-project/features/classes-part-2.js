// class Person {
// 	constructor (name) {
// 		this.name = typeof name === 'string' ? name : 'Anonymous';
// 	}
// 	set name (val) {
// 		this._name = Person.capitalizeWord(val);
// 	}
// 	get name () {
// 		return this._name;
// 	}
// 	printGreeting () {
// 		console.log(`Hi, I am ${this.name}!`);
// 	}
// 	static capitalizeWord (word) {
// 		return word[0].toUpperCase() + word.slice(1);
// 	}
// }

// var person1 = new Person('andrew');
// person1.name = 'jen';
// person1.printGreeting();

// var person2 = new Person();
// person2.printGreeting();

// console.log(Person.capitalizeWord('mike'));

var obj = {
	set age (val) {
		this._age = val + 10;
	},
	get age () {
		return this._age;
	}
}
obj.age = 21;
console.log(obj.age);