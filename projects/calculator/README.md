# Calculator
This is a simple web-based calculator that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes functionalities for clearing the display, using backspace, and handling errors gracefully.


***Features***
Basic Arithmetic Operations: Supports addition, subtraction, multiplication, and division.
Clear Display: Clears all input from the display.
Backspace Functionality: Removes the last character entered, allowing for corrections.
Error Handling: Displays an error message for invalid calculations.


***Usage***
This calculator program is written in HTML, CSS, and JavaScript. It can be easily integrated into any web page.



*****JavaScript Functions****


*****appendToDisplay(input)*****

Description: Appends the given input (a number or operator) to the display.
Usage: Called when a number or operator button is clicked.
Example: appendToDisplay('5') adds the number '5' to the display.

****clearDisplay()****

Description: Clears all input from the display.
Usage: Called when the 'C' (Clear) button is clicked.
Example: clearDisplay() sets the display to an empty string.

******calculate()******

Description: Evaluates the expression currently in the display and shows the result.
Usage: Called when the '=' (equals) button is clicked.
Example: If the display shows '2+3', calculate() will update the display to '5'.

*****backspace()*****

Description: Removes the last character from the display.
Usage: Called when the '←' (Backspace) button is clicked.
Example: If the display shows '12+', backspace() will change it to '12'.
