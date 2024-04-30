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

if(grade <=100 || grade >= 90 )
{
    console.log("Your score of "+grade+" gives you a grade of A");
}

if(grade <=89 || grade >=80 )
{
    console.log("Your score of "+grade+" gives you a grade of B");
}
 if(grade <= )
