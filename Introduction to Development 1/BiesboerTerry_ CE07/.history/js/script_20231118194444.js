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
        let heightFt = document.querySelector("#heightFeet").value;
        let heightIn = document.querySelector("#heightInches").value;
        let weightLbs = document.querySelector("#weight").value;
        
        // Calculate BMI

        // Converting Feet to Inches
        let heightFtInches = heightFt*12;
        let heightTotal = heightFtInches + heightIn;

        let bodyMassIndex = ((( weightLbs / heightTotal ) / heightTotal )*703);
    
        if(bodyMassIndex >= 0 && bodyMassIndex <=18.49)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bmi.toFixed(1)} , indicating your weight is Under Weight Range`; document.querySelector("#image").src ="img/underWeight.jpg";
        }
        }
        else if(bodyMassIndex >=18.50 && bodyMassIndex)
            document.querySelector("")
})