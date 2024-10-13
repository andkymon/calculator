display = document.querySelector("#display");
numberkeys = document.querySelectorAll(".num");

clear = document.querySelector("#clear");
backspace = document.querySelector("#backspace");
dot = document.querySelector("#dot");

operations = document.querySelectorAll(".operation");
equal = document.querySelector("#eqBtn");

//Function to append num or dot key content to sisplay
function appendToDisplay(elem) {
    display.textContent += elem.textContent;
}
//Function to clear display
function clearDisplay() {
    display.textContent = "";
}
//Clear Button
clear.addEventListener("click", clearDisplay); 
//Backspace Button
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});
//Decimal Button
dot.addEventListener("click", function enabledot() {
    if (display.textContent.includes(".")) {
        dot.removeEventListener("click", enabledot);
    } else {
        appendToDisplay(dot);
    }
});
//Operations Functions
function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

let num1;
let oper;
let num2;

let operatorClicked;

//Operation buttons
for (const operation of operations) {
    operation.addEventListener("click", () => {
        //Set flag
        operatorClicked = true;
        //Set style while waiting for next click
        operation.style.color = "orange";
        operation.style.backgroundColor = "white";
        //Save current display as num1 and clicked operation as oper
        num1 = display.textContent;
        oper = operation.textContent;
    });
}

//Number Keys 
for (const number of numberkeys) {
    number.addEventListener("click", () => {
        if (display.textContent.length >= 10) {
            return;
        } else if (operatorClicked === true) { //Condition if an operator button was clicked
            operatorClicked = false; //Reset flag
            //Reset operation button style
            for (const operation of operations) {
                operation.style.color = "";
                operation.style.backgroundColor = "";
            }
            clearDisplay();
            appendToDisplay(number);
        } else {
            appendToDisplay(number);
        } 
    });
}
//if operator is clicked: !!
    //turn flag on!!
    //change style !!
    //store display content as num1 and button content as operator !!

    //if num button is clicked: !!
        //turn flag off !!
        //revert style !!
        //cleardisplay !!
        //if equals is clicked:

//if equals is clicked:
    //turn flag off
    //revert style
    //store current display as num2
    //operate on num1 and num2
    //stop
     

//3 variables
//operate

