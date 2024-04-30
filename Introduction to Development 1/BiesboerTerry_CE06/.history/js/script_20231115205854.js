//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */



let numGals = parseInt(document.querySelector("#numGals").value).reportValidity;



document.querySelector("#startCalc").addEventListener("click", function(e)
{
     let quartsAmount = parseIntdocument.querySelector("#numGals").value = numGals/4; alert("Quarts is selected");
    let pintsAmount = document.querySelector("#numGals").value = numGals/8;  alert("Pints is selected");
    let cupsAmount = document.querySelector("#numGals").value = numGals/16;

   if (id="#inQuarts")
    {document.querySelector("#inQuarts").value .reportValidity().input="quartsAmount"; checked}

    else if(id="#inPints"){document.querySelector("#inPints").value .reportValidity().input="pintsAmount";checked}

   else if(id="#inCups"){document.querySelector("inCups").value .reportValidity() ;input="cupsAmount";checked}
});