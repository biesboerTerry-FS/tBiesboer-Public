//alert("File is connected");

/* Terry Biesboer
November 13, 2023
CE06 HTML Forms */





document.querySelector("#startCalc").addEventListener("click", function(e)
{
   if(document.querySelector("#numGals"))reportValidity() && document.querySelector("inQuarts").reportValidity() || document.querySelector("inPints").reportValidity() || document.querySelector("inCups").reportValidity();

   let numGalsNeeded = parseInt(document.querySelector("#numGals").value);
   let qtsAmount = numGalsNeeded/4;
   let ptsAmount = numGalsNeeded/8;
   let cpsAmount = numGalsNeeded/16;

   if(document.querySelector("inQuarts").checked)
   {
      document.querySelector("quartsAmount").value = qtsAmount;
   }

  


});
//    {
//     {document.querySelector("#inQuarts").value="quartsAmount";reportValidity();input="#quartsAmount"; checked;
// }

// //    {document.querySelector("#inPints").value="pintsAmount"; reportValidity(); input="#pintsAmount";checked;
// // }
// //    {document.querySelector("inCups").value="cupsAmount"; reportValidity();input="#cupsAmount";checked;

// });