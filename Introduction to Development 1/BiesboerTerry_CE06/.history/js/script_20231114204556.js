//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */



let numGals = parseInt(document.querySelector("#numGals").value);

let quartsAmount = numGals/4;
let pintsAmount = numGals/8;
let cupsAmount = numGals/16;

document.querySelector("#startCalc").addEventListener("click", function(e)
{
    console.log(document.querySelector("#startCalc").reportValidity());

    if(document.querySelector("#startCalc"))

});