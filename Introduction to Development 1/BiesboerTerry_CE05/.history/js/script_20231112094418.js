/*
Terry Biesboer
November 9, 2023
CE05 - Query Selectors
*/

//alert("File is connected");


alert("Lets go over your total");

let price1 = parseFloat(prompt("What is the price of your first item in dollars?"));
let price2 = parseFloat(prompt("What is the price of your second item?"));
let subtotal = (price1 + price2);


if(subtotal >= 100){
    document.querySelector("#problem1").innerHTML = "Your total purchase is $"+(subtotal*.90)+ " which includes your 10% discount";

} else if (subtotal >=50 && subtotal <100){
    let total2 = (subtotal*.95);
    document.querySelector("#problem1").innerHTML = "Your total purchase is $"+subtotal*.95+"which includes your 5% discount ";

} else (subtotal >0 && subtotal <50)
{
    document.querySelector("#problem1").innerHTML = "Your total is $"+subtotal;
}

