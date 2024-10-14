// Select DOM elements for display, number keys, operations, and buttons
display = document.querySelector("#display");
numberKeys = document.querySelectorAll(".num");
clear = document.querySelector("#clear");
backspace = document.querySelector("#backspace");
dotBtn = document.querySelector("#dotBtn");
operations = document.querySelectorAll(".operation");
equal = document.querySelector("#eqBtn");

// Variables to store numbers and operator
let num1, num2, oper;  // First number, second number, and operation
let operatorClicked = false;  // Flag to track if operator was clicked
let clickEvent = new Event('click'); // Create a 'click' event to simulate a user click

// FUNCTIONS
// Append number or decimal to display with a length limit
function appendToDisplay(elem) {
    if (display.textContent.length < 10) {
        display.textContent += elem.textContent;
    }
}
// Clear the display
function clearDisplay() {
    display.textContent = "";
}
// Reset the operator button styles and flag
function resetOperationBtnStyle() {
    operatorClicked = false; // Reset operator flag
        // Reset operation button style
        for (const operation of operations) {
            operation.style.color = "";
            operation.style.backgroundColor = "";
        }
}
// Arithmetic operations
function add(num1, num2) {
	return Number(num1) + Number(num2);
};
function subtract(num1, num2) {
	return Number(num1) - Number(num2);
};
function multiply(num1, num2) {
    return Number(num1) * Number(num2);
};
function divide(num1, num2) {
    if (num2 == 0) {
        return "Error";
    }
    return Number(num1) / Number(num2);
};
// Perform the selected operation between two numbers
function Operate(num1, num2, operation) {
    clearDisplay();
    switch(true) {
        case (operation === "+"):
            return add(num1, num2);
        case (operation === "-"):
            return subtract(num1, num2);
        case (operation === "*"):
            return multiply(num1, num2);
        case (operation === "/"):
            return divide(num1, num2);
        default:
            return num2; // Return second number if no operation exists
      }
    
}

// BUTTONS
// Clear Button
clear.addEventListener("click", () => {
    num1 = num2 = oper = undefined; 
    resetOperationBtnStyle();
    clearDisplay();
}); 
// Backspace Button
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});
// Number Keys 
for (const number of numberKeys) {
    number.addEventListener("click", () => {
        if (operatorClicked) { 
            resetOperationBtnStyle();
            clearDisplay();
            appendToDisplay(number);
        } else {
            appendToDisplay(number);
        } 
    });
}
// Decimal Button
dotBtn.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        appendToDisplay(dotBtn); 
    }
});
// Operation buttons
for (const operation of operations) {
    operation.addEventListener("click", () => {
        if (operatorClicked) { // Only one operation is highlighted at a time
            resetOperationBtnStyle();
        };
        if (oper) { // Execute the existing operation before setting the new one 
            equal.dispatchEvent(clickEvent);
        }
        operatorClicked = true; // Set operator flag
        operation.style.color = "orange"; // Highlight operator
        operation.style.backgroundColor = "white";
        num1 = display.textContent; // Store first number
        oper = operation.textContent; // Store operator
    });
}
// Equal Button
equal.addEventListener("click", () => {
    resetOperationBtnStyle();
    num2 = display.textContent; // Store second number
    display.textContent = Operate(num1, num2, oper); // Show result
    num1 = num2 = oper = undefined; //Reset values
    operatorClicked = true; // To prevent num key appending on result
});


//Round long answers
//If result 
    //Decimal: set precision length 9-floor string length then round


