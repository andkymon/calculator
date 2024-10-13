display = document.querySelector("#display");
numberkeys = document.querySelectorAll(".num");

clear = document.querySelector("#clear");
backspace = document.querySelector("#backspace");
dot = document.querySelector("#dot");

addBtn = document.querySelector("#addBtn");
subBtn = document.querySelector("#subBtn");
mulBtn = document.querySelector("#mulBtn");
divBtn = document.querySelector("#divBtn");
eqBtn = document.querySelector("#eqBtn");

function appendToDisplay(elem) {
    display.textContent += elem.textContent;
}

//Number Keys 
for (const number of numberkeys) {
    number.addEventListener("click", () => {
        if (display.textContent.length >= 10) {
            return;
        } else {
            appendToDisplay(number);
        }
    });
}
//Clear Button
clear.addEventListener("click", () => display.textContent = ""); 
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



//add
//subtract
//multiply
//divide
//3 variables
//operate

