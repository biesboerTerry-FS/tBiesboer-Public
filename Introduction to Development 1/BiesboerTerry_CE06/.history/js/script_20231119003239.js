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

// Button click
document.querySelector("#movieTotal").addEventListener("click", function(e)
{
      // Validation
      if(document.querySelector("#numDvd").reportValidity() && document.querySelector("#numBlu").reportValidity() && document.querySelector("#numUltra").reportValidity()
      )
{
      // Gather info from form and convert
      let qtyDvd = parseInt(document.querySelector("#numDvd").value);
      let qtyBlu = parseInt(document.querySelector("#numBlu").value);
      let qtyUltra = parseInt(document.querySelector("#numUltra").value);

   // Total of discs
   let totalDiscs = parseInt(qtyBlu + qtyDvd + qtyUltra);

   // Conditional for quantity
if(totalDiscs >=0 && totalDiscs <=49)
{
   document.querySelector("#totalMovies").innerHTML = `Your collection contains only ${totalDiscs} movies, which makes you a bronze star member.`, document.querySelector("#imageResult").src="img/bronzeStar.jpg";
}
else if(totalDiscs >=50 && totalDiscs <=99)
{
   document.querySelector("#totalMovies").innerHTML = `Your collection contains ${totalDiscs} movies, which makes you a silver star member.`, document.querySelector("#imageResult").src="img/silverStar.jpg";
}
else if(totalDiscs >=100)
{
   document.querySelector("totalMovies").innerHTML = `Wow! Your collection contatin ${totalDiscs} , which makes you a gold star member`, document.querySelector("#imageResult").src="img/goldStar.jpg";

}
}
});

