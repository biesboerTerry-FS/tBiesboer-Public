/* Terry Biesboer
Object Creation
May, 26, 2024 */

// Custom class
class HighScore {
	constructor(videoGame, playerName, highScore) {
		console.log("New High Score");
		this.videoGame = videoGame;
		this.playerName = playerName;
		this.highScore = highScore;
	}
	scoreStatus() {
		alert("New Score Added");
	}
}

class Main {
	constructor() {
		console.log("New Main");
		this.addButton = document.getElementById("addButton");
		this.output = document.getElementById("output").innerHTML;
		this.addButton.addEventListener("click", (e) => {
			this.add(e);
		});
	}
	add(e) {
		e.preventDefault();
		console.log("button clicked");

		const form = document.querySelectorAll("input");
		console.log(form);
		let hs;
		let pn;
		let vg;

		if (document.forms["form"].reportValidity()) {
			form.forEach((element) => {
				if (element.id === "videoGame") {
					console.log(element.value);
					vg = element.value;
				} else if (element.id === "playerName") {
					console.log(element.value);
					pn = element.value;
				} else if (element.id === "highScore") {
					console.log(element.value);
					hs = element.value;
				}
			});
			console.log(vg, pn, hs);
			console.log("Validity confirmed");
			const newScore = new HighScore(vg, pn, hs);
			newScore.scoreStatus();
			document.querySelector("form").reset();
			output.innerHTML += `Game: ${newScore.videoGame} <br> Name: ${newScore.playerName} <br> Score: ${newScore.highScore} <br>`;
		}
	}
}

// IIFE
(() => {
	const main = new Main();
})();
