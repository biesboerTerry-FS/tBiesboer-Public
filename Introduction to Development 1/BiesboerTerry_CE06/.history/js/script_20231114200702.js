//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */



let numGals = parseInt(document.querySelector("#numGals"))

let quartsAmount = numGals/4;
let pintsAmount = numGals/8;
let cupsAmount = numGals/16;



if(document.querySelector("#inQuarts").checked)
{
    alert("Quarts is checked");
}
else if(document,querySelector("#inPints").checked)
{ 
    aler("Pints is checked");
}
else if(document.querySelector("#inCups").checked)
{
    console.log("Cups is checked");
}