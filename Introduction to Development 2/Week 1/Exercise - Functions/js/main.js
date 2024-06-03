function question1() {
	console.log("Question 1");
	console.log("Ello' Guvna");
}
question1();

function question2(myName) {
	console.log("Question 2");
	console.log("It's a me, " + myName);
}

question2("Terry");

let userName = prompt("What is your name?");

function question3() {
	console.log("Question 3");
	console.log("Welcome " + userName);
}

question3();

function question4(num1, num2) {
	console.log("Question 4");
	console.log(num1 * num2);
}

question4(6, 7);

function question5() {
	let numOne;
	let numTwo;
	let sum;

	function getNumbers() {
		numOne = Number(prompt("Enter the first number."));
		numTwo = Number(prompt("Enter the second number."));
	}
	function calculateNumbers() {
		sum = numOne + numTwo;
		console.log(sum);
	}
	function displayNumbers() {
		alert("The sum is " + sum);
		// calculateNumbers();
	}
	console.log("Question 5");
	getNumbers();
	calculateNumbers();
	displayNumbers();
}
question5();
