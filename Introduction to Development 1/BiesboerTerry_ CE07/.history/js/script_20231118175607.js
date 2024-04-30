/* Terry Biesboer
November 18, 2023
Final Project - CE07 */

// Button Code

document.querySelector("#calcBMI").addEventListener("click", function(e){

    // Listen for button click
    if(document.querySelector("#heightFeet").reportValidity() && document.querySelector("#heightInches").reportValidity() && document.querySelector("#weight").reportValidity()
    )
    {
        // Taking values from form
        let heighttFt = parseInt(document.querySelector("#heightFeet").value);
        let heighttIn = parseFloat(document.querySelector("#heightInches").value);
        let weightLbs = parseFloat(document.querySelector("#weight").value);

        let bmi = ()
    }

});