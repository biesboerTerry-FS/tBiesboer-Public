/*
Terry Biesboer
November 9, 2023
CE05 - Query Selectors
*/

//alert("File is connected");

// Alert user to process
alert("Lets go over your total");

// Prompts for prices
let price1 = parseFloat(prompt("What is the price of your first item in dollars?"));
let price2 = parseFloat(prompt("What is the price of your second item?"));

// Math conversions
let subtotal = price1 + price2;
let total1 = parseFloat(subtotal*.90);
let total2 = parseFloat(subtotal*.95).toFixed(2);

//  
if(subtotal >= 100){
    document.querySelector("#problem1").innerHTML = "Your total purchase is $"+total1+ ", which includes your 10% discount";
    document.querySelector("#problem1").style.backgroundColor="green";
}
  else if (subtotal >=50 && subtotal <100)
{
    document.querySelector("#problem2").innerHTML = "Your total purchase is $"+total2+", which includes your 5% discount ";
    document.querySelector("#problem2").style.backgroundColor="green";
} 
else if (subtotal >0 && subtotal <50)
{
    document.querySelector("#problem3").innerHTML = "Your total is $"+subtotal;
    document.querySelector("#problem3").style.backgroundColor="yellow".style.color="black";
}


alert("Now I'm going to help with your trip by asking some questions.");


let numGallons = parseFloat(prompt("How many gallons of gas can your car hold?"));
let percentTank = parseFloat(prompt("Percentage of gas remaining"));
let mpg = parseFloat(prompt("How many miles ger gallon does your car get?"));

let fuel = numGallons*percentTank/100;
let distance = fuel*mpg;

if(distance >=200){
   document.querySelector("#distance").innerHTML ="Yes, you can drive "+distance+" miles and you can make it without stopping for gas!";
}

if (distance <200 && distance >0){
    document.querySelector("#distance").innerHTML="You can only drive "+distance+ " miles more, better get gas while you can";
}

/*let answer = prompt("Would you like to see Text only or Text and Graphic");

document.querySelector("#button1").addEventListener("click", function(e)
{
    document.querySelector("#photo").src ="img/enoughGas.jpg";
});

document.querySelector("#button2").addEventListener("click", function(e)
{
    document.querySelector("#photo").src ="img/notEnoughGas.jpg";
});
*/

