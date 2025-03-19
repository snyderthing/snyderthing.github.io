
const myBtn = document.querySelector("button");

function myFunction(evt) {
    alert(evt.buttons);
}

myBtn.onclick = myFunction;

/* ---------------- */

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

function WhichButton(event) {
    let text = "You pressed button: " + event.button;
    document.getElementById("demo").innerHTML = text;
}
