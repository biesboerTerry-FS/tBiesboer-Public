/*
Terry Biesboer
November 9, 2023
CE05 - Query Selectors
*/

//alert("File is connected");


alert("Lets go over your total");

let price1 = parseFloat(prompt("What is the price of your first item in dollars?"));
let price2 = parseFloat(prompt("What is the price of your second item?"));
let subtotal = price1 + price2;
let total1 = subtotal*.90;
let total2 = subtotal*.95;

if(subtotal >= 100){
    document.querySelector("#problem1").innerHTML = "Your total purchase is $"+(subtotal*.90)+ " which includes your 10% discount";
    document.querySelector("#problem1").style.backgroundColor="green";
}
  if (subtotal >=50 && subtotal <100)
{
    document.querySelector("#problem2").innerHTML = "Your total purchase is $"+(subtotal*.95)+" which includes your 5% discount ";
    document.querySelector("#problem2").style.backgroundColor="green";
} 
if (subtotal >0 && subtotal <50)
{
    document.querySelector("#problem3").innerHTML = "Your total is $"+subtotal;
    document.querySelector("#problem3").style.backgroundColor="yellow";
}


alert("Now I'm going to help with your trip by asking some questions.");

let numGallons = parseInt(prompt("How many gallons of gas can your car hold?"));
let percentTank = parseInt(prompt("Percentage of gas remaining"));
let mpg = parseInt(prompt("How many miles ger gallon does your car get?"));

let distsance = (numGallons*percentTank)/mpg;

if(distance >200){
    document.querySelector()
}