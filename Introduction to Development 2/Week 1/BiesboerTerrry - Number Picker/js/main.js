"use strict";

(function () {
	let randomNumber;
	let min = 1;
	let max = 5;
	let score = 0;
	let currentLevel = 1;
	let playerHighScore = 0;
	let guesses = 1;
	let userNumber;
	let answer;
	let playerName = prompt("What is your name?");

	function playGame() {
		if (guesses <= 4) {
			// console.log(randomNumber);
			playerHighScore = score;
			userNumber = prompt(
				"Level: " +
					currentLevel +
					"\n" +
					"Score: " +
					score +
					"\n" +
					"High Score: " +
					playerHighScore +
					"\n" +
					playerName +
					", pick a number between 1 and " +
					max +
					"\n" +
					"\n" +
					"Enter guess # " +
					guesses +
					"\n"
			);
			if (userNumber > randomNumber) {
				guesses = guesses + 1;
				alert("Oh my, that's too high! Guess again.");
			} else if (userNumber < randomNumber) {
				guesses = guesses + 1;
				alert("Oh no, that's too low! Guess again.");
			} else {
				guesses = 1;
				score = currentLevel * 10 + score;
				currentLevel = currentLevel + 1;
				max = max + 5;
				alert("You got it right! On to level " + currentLevel);
				getRandom();
				console.log("If answer is correct, the new number is " + randomNumber);
			}
			playGame();
		} else {
			playerHighScore = 0;
			gameOver();
		}
	}
	function gameOver() {
		answer = prompt(
			"Game over " +
				playerName +
				"." +
				"\n" +
				"Your score was " +
				score +
				"." +
				"\n" +
				"Play again? Type Yes or No."
		);
		if (answer.toLowerCase == "Yes") {
			alert("Player chose yes");
			guesses = 1;
			playGame();
		} else;
		{
			alert(
				"Thanks for playing! " + playerName + "\n" + "Refresh page to try again"
			);
			return;
		}
	}
	function getRandom() {
		randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		return Number(randomNumber);
		// console.log(randomNumber);
	}
	playGame();
	getRandom();
})();
