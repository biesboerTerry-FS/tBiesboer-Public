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
        let heightFt = parseInt(document.querySelector("#heightFeet").value);
        let heightIn = parseFloat(document.querySelector("#heightInches").value).toFixed(2);
        let weightLbs = parseFloat(document.querySelector("#weight").value).toFixed(2);
        
        // Calculate BMI

        let heightTotal = 
        let bodyMassIndex = ( ( weightLbs / heightTotal ) / heightTotal )*;
    }

});