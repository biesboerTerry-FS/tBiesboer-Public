//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */




// Button click
document.querySelector("#startCalc").addEventListener("click", function(e)
{
   // Validation for input
   if(document.querySelector("#numGals").reportValidity()
   )
{
   // Gather input from form and math conversions
   let numGalsNeeded = parseFloat(document.querySelector("#numGals").value);
   let qtsAmount = numGalsNeeded*4;
   let ptsAmount = numGalsNeeded*8;
   let cpsAmount = numGalsNeeded*16;

   // Conditionals for results
   if(document.querySelector("#inQuarts").checked)
   {
      parseFloat(document.querySelector("#quartsAmount").value = qtsAmount), document.querySelector("#pintsAmount").value ="", document.querySelector("#cupsAmount").value="";
   }
  else if(document.querySelector("#inPints").checked)
  {
      parseFloat(document.querySelector("#pintsAmount").value = ptsAmount), document.querySelector("#quartsAmount").value="", document.querySelector("#cupsAmount").value="";
  }
  else if(document.querySelector("#inCups").checked)
{
      parseFloat(document.querySelector("#cupsAmount").value = cpsAmount), document.querySelector("#quartsAmount").value="", document.querySelector("#pintsAmount").value="";
}
}
});

// Second problem code

document.querySelector("#movieTotal").addEventListener("click", function(e)
{
   let qtyDvd = parseInt(document.querySelector("#numDvd").value);
   let qtyBlu = parseInt(document.querySelector("#numBlu").value);
   let qtyUltra = parseInt(document.querySelector("#numUltra").value);

   let totalDiscs = parseInt(qtyBlu + qtyDvd + qtyUltra);
if(totalDiscs >=0 && totalDiscs <=49)
   document.querySelector("#totalMovies").innerHTML = `our collection contains only ${} movies, which makes you a bronze star member.`;
});

