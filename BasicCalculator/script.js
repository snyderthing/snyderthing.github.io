const input = document.getElementById("inputBox");
const container = document.getElementById("container");

container.addEventListener("click", function (e) {
    buttonClick(e.target.id);
});
const calculateButton = document.getElementById("button=");
calculateButton.addEventListener("click", calculate);

const clearButton = document.getElementById("buttonc");
clearButton.addEventListener("click", clearDisplay);

function buttonClick(buttonId) {
    if (buttonId !== "buttonc" && buttonId !== "button=") {
        const s = buttonId.replace("button", "");
        addToDisplay(s);
    }
}

function addToDisplay(value) {
    input.value += value;
}

function calculate() {
    if (input.value === "" || input.value === ".") {
        alert("Please enter a mathematical expression");
        return;
    }

    input.value = eval(input.value);
}

function clearDisplay() {
    input.value = '';
}
