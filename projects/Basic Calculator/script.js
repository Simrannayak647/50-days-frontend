// Get all the btn
let btn = document.querySelectorAll("button");

// Get the input box
let result = document.getElementById("result");

// Add click event to every button
btn.forEach(function(button) {
  button.addEventListener("click", function () {

    let value = button.innerText;

    if (value === "C") {
      clearScreen();
    }
    else if (value === "=") {
      calculate();
    }
    else {
      addValue(value);
    }

  });
});

// Clear the screen
function clearScreen() {
  result.value = "";
}

// Calculate the result
function calculate() {
  result.value = eval(result.value);
}

// Add value to screen
function addValue(val) {
  result.value = result.value + val;
}
