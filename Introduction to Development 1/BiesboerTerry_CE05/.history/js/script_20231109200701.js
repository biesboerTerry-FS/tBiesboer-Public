/*
Terry Biesboer
November 9, 2023
CE04 - Conditionals
*/

//alert("File is connected");


// Problem #1 - Grade Letter Calculator

// First alert to user regarding process
alert("I'm going to ask some questions");

// Alert to open console and refresh
alert("I suggest opening your console and refreshing your page");

//Prompt for grade in a number
let grade = prompt("What is your grade in a whole number?");

// Alert if number is not a whole number
if(grade < 0 || grade > 100)
{
    alert("Please enter a whole number between 0 and 100");
}

// if to show an A grade
if(grade <=100 && grade >= 90 )
{
    console.log("You have a(n) "+grade+" %, which means you have earned an A in the class");
}

// if to show a B grade
if(grade <89 && grade >80 )
{
    console.log("You have a(n) "+grade+" %, which means you have earned an B in the class");
}

// if to show a C grade
 if(grade <79 && grade >70)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an C in the class");
 }

 // if to show a D grade
 if(grade <69 && grade >60)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an D in the class");
 }

 // if to show an  grade
 if(grade <= 59 && grade >= 0)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an F in the class");
 }

 // Problem #2 - Pumpkin Patch Pickers

 // Prompt for weight of pumpkin
 let weight = parseFloat(prompt("Next, let's see how much that pumpkin costs. What is the weight in pounds, numbers only please."));

 if(weight <0)
{
    console.log("Please enter a value above 0")
}

let cost1 = weight*1.00;
let cost2 = weight*0.90;
let cost3 = weight*0.80;
let cost4 = weight*0.70;
let cost5 = weight*0.60;
let cost6 = weight*0.50;

 if(weight >0 && weight <=5.4)
 {
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost1);
}

if(weight >=5.5 && weight <=10.74)
{
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost2);
}

if(weight >=10.75 && weight <=24.99)
{
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost3);
}

if(weight >=25 && weight <==49.99)
{
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost4);
}

if(weight >=50 && weight <=99.99)
{
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost5);
}

if(weight >100)
{
    console.log("Your pumpkin of "+weight+" lbs costs $ "+cost6);
}