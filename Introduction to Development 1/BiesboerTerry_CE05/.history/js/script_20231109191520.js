/*
Terry Biesboer
November 9, 2023
CE04 - Conditionals
*/

//alert("File is connected");

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

if(grade <=100 && grade >= 90 )
{
    console.log("You have a(n) "+grade+" %, which means you have earned an A in the class");
}

if(grade <89 && grade >80 )
{
    console.log("You have a(n) "+grade+" %, which means you have earned an B in the class");
}

 if(grade <=79 && grade >=70)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an C in the class");
 }

 if(grade <=69 && grade >=60)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an D in the class");
 }

 if(grade <= 59 && grade >= 0)
 {
    console.log("You have a(n) "+grade+" %, which means you have earned an F in the class");
 }