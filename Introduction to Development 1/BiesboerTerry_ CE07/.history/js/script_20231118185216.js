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
        let heightIn = parseFloat(document.querySelector("#heightInches").value);
        let weightLbs = parseFloat(document.querySelector("#weight").value);
        
        // Calculate BMI

        // Converting Feet to Inches
        let heightTotal = ((heightFeet*12) + (heightInches).toFixed(2));

        let bodyMassIndex = ((( weightLbs / heightTotal ) / heightTotal )*703);
    }
    if(bodyMassIndex >= 0 && bodyMassIndex <18.5)
    {
        document.querySelector("#finalResult").innerHTML = `Your BMI is ${bmi.toFixed(1)} , indicating your weight is Under Weight Range)}`; document.querySelector("#image") src ="img/underWeight.jpg";
;    }
});