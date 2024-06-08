"use strict";
(function () {
	console.log("Question One");
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}

	console.log("Question Two");
	for (let i = 10; i >= 0; i--) {
		console.log(i);
	}

	console.log("Question Three");
	for (let i = 10; i <= 50; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}

	console.log("Question Four");
	let score = 0;
	for (let i = 1; i <= 200; i += 10) {
		score += 10;
		if (score == 200) {
			console.log("Score " + score);
		}
	}

	console.log("Question Five");
	let timesRolled = 0;
	let diceValue = 0;
	while (diceValue != 3) {
		diceValue = Math.floor(Math.random() * 6 + 1);
		timesRolled++;
		console.log("Roll: " + timesRolled + ". " + "Dice Value: " + diceValue);
	}
	console.log("It took " + timesRolled + " tosses to roll a 3.");
})();
