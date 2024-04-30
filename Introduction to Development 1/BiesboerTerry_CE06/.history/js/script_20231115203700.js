//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */



let numGals = parseInt(document.querySelector("#numGals").value).reportValidity;



document.querySelector("#startCalc").addEventListener("click", function(e)
{
     let quartsAmount = document.querySelector("#numGals").value = numGals/4; console.log("Quart is selected");
    let pintsAmount = document.querySelector("#numGals").value = numGals/8;  console.log("Pints is selected");
    let cupsAmount = document.querySelector("#numGals").value = numGals/16; console.log)
    if (id="#inQuarts")
    {document.querySelector("#inQuarts").reportValidity() .input="quartsAmount"; }
} 
    
    else if(id="#inPints"){document.querySelector("#inPints").reportValidity().input="pintsAmount";}
    
   else if(id="#inCups"){document.querySelector("inCups").reportValidity() .input="cupsAmount";
});