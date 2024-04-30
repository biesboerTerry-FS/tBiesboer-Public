//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */



let numGals = parseInt(document.querySelector("#numGals").reportValidation);

let quartsAmount = numGals/4;
let pintsAmount = numGals/8;
let cupsAmount = numGals/16;

document.querySelector("#startCalc").addEventListener("click", function(e)
{
if(document.querySelector("#inQuarts").checked)

    //alert("Quarts is checked");
}
{
else if(document.querySelector("#inPints").checked)

    //alert("Pints is checked");
}
{
else (document.querySelector("#inCups").checked)

    //alert("Cups is checked");
})