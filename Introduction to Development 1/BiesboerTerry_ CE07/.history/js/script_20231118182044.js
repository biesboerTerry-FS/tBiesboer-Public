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
        let heightFt = parseInt(document.querySelector("#heightFeet").value;
        let heightIn = parseFloat(document.querySelector("#heightInches").value .reportValidity());
        let weightLbs = parseFloat(document.querySelector("#weight").value .reportValidity());
        
        // Calculate BMI

        let totalHeight = 
        let bodyMassIndexi = ( ( weightLbs / heightTotal ) / heightTotal );
    }

});