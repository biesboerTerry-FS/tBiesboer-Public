"use strict";

(function () {
	let min = document.getElementById("lowestNumber");
	console.log(min);
	let max = document.getElementById("highestNumber");
	console.log(max);
	// let randomNumber;
	let button = document.querySelector("button");
	let minNum;
	let maxNum;
	let avg;
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");
	button.addEventListener("click", createChart);
	function createChart() {
		ctx.clearRect(0, 0, 750, 300);
		if (min.reportValidity() && max.reportValidity()) {
			preventDefault();
		}
		if (minNum > maxNum) {
			alert("Minimum number cannot be more than maximum.");
		}
		minNum = Number(min.value);
		maxNum = Number(max.value);
		let x = 35;
		avg = 0;
		for (let i = 1; i <= 10; i++) {
			let randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
			ctx.fillStyle = " #6495ed";
			ctx.fillRect(x, 240 - randomNumber, 40, randomNumber);
			ctx.font = "16px Arial";
			console.log("CHECKING: " + randomNumber);
			ctx.fillText(randomNumber, x + 20, 190 - randomNumber);
			ctx.textAlign = "center";
			ctx.font = "12px Arial";
			ctx.fillText("Day " + i, x + 20, 280);
			x = x + 70;
			avg = avg + randomNumber;
		}
		avg = avg / 10;
		document.getElementById("averageNumber").innerHTML = "Average: " + avg;
	}
})();
