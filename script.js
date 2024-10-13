display = document.querySelector("#display");

numberkeys = document.querySelectorAll(".num");

addBtn = document.querySelector("#addBtn");
subBtn = document.querySelector("#subBtn");
mulBtn = document.querySelector("#mulBtn");
divBtn = document.querySelector("#divBtn");
eqBtn = document.querySelector("#eqBtn");

clear = document.querySelector("#clear");
backspace = document.querySelector("#backspace");

for (const number of numberkeys) {
    number.addEventListener("click", function enablebtn(e) {
        if (display.textContent.length >= 11) {
            for (const number of numberkeys) {
                number.removeEventListener("click", enablebtn);
            }
        } else {
            display.textContent += number.textContent;
            console.log(display.textContent.length);
        }
    });
}


//Number Overflow disable on 11