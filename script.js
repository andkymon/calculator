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
    // Reset flag
    operatorClicked = false; 
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
            return num2;
      }
    
}

// BUTTONS
// Clear Button
clear.addEventListener("click", () => {
    num1 = num2 = oper = undefined; // Reset values
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
        if (operatorClicked) return;
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
});


//Multiple Operations
//If an operation exists
    //Simulate Click Equal
    //continue
//If operatorcliucked is true
    //do nothing


//Round long answers

