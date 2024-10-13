display = document.querySelector("#display");
numberkeys = document.querySelectorAll(".num");

clear = document.querySelector("#clear");
backspace = document.querySelector("#backspace");

addBtn = document.querySelector("#addBtn");
subBtn = document.querySelector("#subBtn");
mulBtn = document.querySelector("#mulBtn");
divBtn = document.querySelector("#divBtn");
eqBtn = document.querySelector("#eqBtn");

for (const number of numberkeys) {
    number.addEventListener("click", function enablebtn(e) {
        if (display.textContent.length >= 10) {
            return;
        } else {
            display.textContent += number.textContent;
            console.log(display.textContent.length);
        }
    });
}

clear.addEventListener("click", () => display.textContent = "");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

//Backspace
//One . only