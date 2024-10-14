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
// Function to append num or dot key content to display
function appendToDisplay(elem) {
    if (display.textContent.length < 10) {
        display.textContent += elem.textContent;
    }
}
// Function to clear display
function clearDisplay() {
    display.textContent = "";
}
// Function to reset operation button style to default
function resetOperationBtnStyle() {
    // Reset flag
    operatorClicked = false; 
        // Reset operation button style
        for (const operation of operations) {
            operation.style.color = "";
            operation.style.backgroundColor = "";
        }
}
// Arithmetic Functions
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
// Function to operate on 2 numbers respective to the operation
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
clear.addEventListener("click", clearDisplay); 
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
        // Set flag
        operatorClicked = true;
        // Set style while waiting for next click
        operation.style.color = "orange";
        operation.style.backgroundColor = "white";
        // Save current display as num1 and clicked operation as oper
        num1 = display.textContent;
        oper = operation.textContent;
    });
}
// Equal Button
equal.addEventListener("click", () => {
    resetOperationBtnStyle();
    num2 = display.textContent;
    display.textContent = Operate(num1, num2, oper); 
    //Reset values
    num1 = num2 = oper = undefined;
});

//result digit limit
//multiple operations

