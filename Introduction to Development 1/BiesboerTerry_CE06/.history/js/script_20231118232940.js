//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */





document.querySelector("#startCalc").addEventListener("click", function(e)
{
   if(document.querySelector("#numGals").reportValidity()
   )
   {
   let numGalsNeeded = parseInt(document.querySelector("#numGals").value);
   let qtsAmount = numGalsNeeded/4;
   let ptsAmount = numGalsNeeded/8;
   let cpsAmount = numGalsNeeded/16;

   if(document.querySelector("#inQuarts").checked)
   {
      parseInt(document.querySelector("#quartsAmount").value = qtsAmount); document.querySelector("#pintsAmount").value =""; document.querySelector("#cup[s")
   }
  else if(document.querySelector("#inPints").checked)
  {
      parseInt(document.querySelector("#pintsAmount").value = ptsAmount); 
  }
  else if(document.querySelector("#inCups").checked)
{
      parseInt(document.querySelector("#cupsAmount").value = cpsAmount); 
}
}
});
