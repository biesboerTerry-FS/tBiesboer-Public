//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */





document.querySelector("#startCalc").addEventListener("click", function(e)
{
   if(document.querySelector("#numGals"))reportValidity() && document.querySelector("inQuarts").reportValidity() || document.querySelector("inPints").reportValidity() || document.querySelector("inCups").reportValidity();

   let numGalsNeeded = parseInt(document.querySelector("#numGals").value);
   let quartsAmount = numGalsNeeded/4;
   let pintsAmount = numGalsNeeded/8;
   let cupsAmount = numGalsNeeded/16;

   if(inQuarts = checked)
   {
      document.querySelector("quartsAmount").value = 
   }

  


});
//    {
//     {document.querySelector("#inQuarts").value="quartsAmount";reportValidity();input="#quartsAmount"; checked;
// }

// //    {document.querySelector("#inPints").value="pintsAmount"; reportValidity(); input="#pintsAmount";checked;
// // }
// //    {document.querySelector("inCups").value="cupsAmount"; reportValidity();input="#cupsAmount";checked;

// });