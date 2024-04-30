/* Terry Biesboer
November 18, 2023
Final Project - CE07 */

// Button Code

document.querySelector("#calcBMI").addEventListener("click", function(e)
{

    // Validation
    if(document.querySelector("#heightFeet").reportValidity() && document.querySelector("#heightInches").reportValidity() && document.querySelector("#weight").reportValidity()
    )
    {
        // Taking values from form
        let heightFt = parseInt(document.querySelector("#heightFeet").value);
        let heightIn = parseFloat(document.querySelector("#heightInches").value);
        let weightLbs = parseFloat(document.querySelector("#weight").value);

        // Converting Feet to Inches
        let heightFtInches = (heightFt*12);
        let heightTotal = heightFtInches + heightIn;

        //Calculate BMI
        let bodyMassIndex = (((weightLbs/heightTotal)/heightTotal)*703);
    
        if(bodyMassIndex >= 0 && bodyMassIndex <=18.49)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bodyMassIndex.toFixed(1)} , indicating your weight is Under Weight range for adults of your height.`; document.querySelector("#image").src = "img/underWeight.jpg";
        }
        }
        else if(bodyMassIndex >=18.50 && bodyMassIndex <=24.89)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bodyMassIndex.tofixed(1)} , indicating your weight is within Healthy range for adults of your height.`; document.querySelector("#image").src = "img/healthyWeight.jpg";
        }
        else if(bodyMassIndex >=24.9 && bodyMassIndex <=29.89)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bodyMassIndex.tofixed(1)} , indicating your weight is within the Overweight range for adults of your age.`; document.querySelector("#image").src = "img/overWeight.jpg";
        }
        else if(bodyMassIndex >=29.9 && bodyMassIndex <=34.9)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bodyMassIndex.tofixed(1)} , indicating your weight is within the Obese range for adults of your age.`; document.querySelector("#image").src = "img/obeseWeight.jpg";
        }
        else if(bodyMassIndex >=35)
        {
            document.querySelector("#finalResult").innerHTML = `Your BMI is ${bodyMassIndexi.tofixed(1)} , indicating your weight is within the Extremely Obese range for adults of your age.`; document.querySelector("#image").src = "img/extremeObeseWeight.jpg";
        }
        
        });