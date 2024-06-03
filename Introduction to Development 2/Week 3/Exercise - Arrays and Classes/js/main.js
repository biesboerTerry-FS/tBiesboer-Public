/* Terry Biesboer
Arrays and Classes
May, 26, 2024 */

class Computer {
	constructor(year, make) {
		this.year = 2023;
		this.make = "MacBook Pro";
	}
	startUp() {
		console.log("I've booted the computer.");
	}
	setUp() {
		console.log("I've set up the computer.");
	}
	enjoy() {
		console.log("Time for some coding!");
	}
}

(function () {
	function questionOne() {
		console.log("Question One");
		const myArray = [1, "potato", 2, "potatoes", "ah ah ah"];
		for (let index = 0; index < myArray.length; index++) {
			const element = myArray[index];
			console.log(element);
		}
	}
	questionOne();
	console.log("-----------------");

	function questionTwo() {
		console.log("Question Two");
		let myName = "Terry";
		let favFood = "Sushi";
		const stuff = [myName, favFood];
		for (let index = 0; index < stuff.length; index++) {
			const element = stuff[index];
			console.log(element);
		}
	}
	questionTwo();
	console.log("-----------------");

	function questionThree() {
		console.log("Question Three");
		const numberArray = [10, 20, 30, 40, 50];
		numberArray.forEach((number) => console.log(number));
	}
	questionThree();
	console.log("-----------------");

	function questionFour() {
		console.log("Question Four");
		const computerOne = new Computer(2024, "MacBook Air");
		console.log(computerOne.year);
		console.log(computerOne.make);
		computerOne.startUp();
		computerOne.setUp();
		computerOne.enjoy();
	}
	questionFour();
	console.log("-----------------");

	function questionFive() {
		let testArray = [
			5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 95, 100
		];
		const results = [];

		const getEvenNumbers = (array) => {
			for (let index = 0; index < array.length; index++) {
				const element = array[index];
				if (testArray[index] % 2 == 0) {
					results.push(testArray[index]);
				}
			}
			return results;
		};
		let evenNumbers = getEvenNumbers(testArray);
		console.log("Question Five");
		console.log(evenNumbers);
		console.log("-----------------");
	}
	questionFive();
})();
