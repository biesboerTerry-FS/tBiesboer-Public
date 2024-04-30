//alert ("File is Connected");

/* Terry Biesboer
November 7, 2023
Let's Go Shopping */

//Alert for process
alert ("I'm going to ask some questions regarding your purchase.");

//Prompt for first item
let item1 = prompt ("What is the name of your first item?");
console.log ("Your first item is "+item1);

//Prompt for first item cost
let price1 = parseFloat(prompt ("What is the price of the item?"));
console.log ("Each "+item1+" is $"+price1);

//Prompt for first item quantity
let qty1 = Number(prompt ("How many are you purchasing?"));
console.log("You're buying a total of "+qty1+" "+item1);

//Prompt for second item
let item2 = prompt ("What is the name of your second item?");
console.log ("Your second item is "+item2);

//Prompt for second item cost
let price2 = parseFloat(prompt("What is the price of the item?"));
console.log ("Each "+item2+" is $"+price2);

//Prompt for second item quantity
let qty2 = Number(prompt("How many are you purchasing?"));
console.log ("You're buying a total of "+qty2+" "+item2);

//Prompt for subtotal
let subTotal = (price1 * qty1 + price2 *qty2);
console.log ("Your subtotal before tax is $"+subTotal);

//Prompt for tax
let tax = (subTotal * 0.05);
console.log ("Your tax is $"+tax);

//Prompt for grand total
let total = subTotal + tax;
console.log ("Your grand total is $"+total);



