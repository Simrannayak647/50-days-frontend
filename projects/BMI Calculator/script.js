// Get elements
const heightBox = document.getElementById("height");
const weightBox = document.getElementById("weight");
const btn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("bmi-result");
const conditionText = document.getElementById("weight-condition");

// Button click event
btn.addEventListener("click", function () {

    // Get input values
    let height = heightBox.value;
    let weight = weightBox.value;

    // BMI formula
    let bmi = weight / ((height / 100) * (height / 100));

    // Show result (no rounding)
    resultBox.value = bmi;

    // Check condition
    if (bmi < 18.5) {
        conditionText.textContent = "Underweight";
    } 
    else if (bmi < 25) {
        conditionText.textContent = "Normal weight";
    } 
    else if (bmi < 30) {
        conditionText.textContent = "Overweight";
    } 
    else {
        conditionText.textContent = "Obesity";
    }

});
