//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */




// Button click
document.querySelector("#startCalc").addEventListener("click", function(e)
{
   
   if(document.querySelector("#numGals").reportValidity()
   )
   {
   let numGalsNeeded = parseFloat(document.querySelector("#numGals").value);
   let qtsAmount = numGalsNeeded*4;
   let ptsAmount = numGalsNeeded*8;
   let cpsAmount = numGalsNeeded*16;

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


