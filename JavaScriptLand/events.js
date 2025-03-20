function quack() {
    console.log("quack");
}

window.onload = quack;

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

function backgroundRed() {
    document.getElementById("section").style.backgroundColor = "red";
    document.getElementById("section").style.color = "white";
}

function backgroundGreen() {
    document.getElementById("section").style.backgroundColor = "#D3F1DF";
    document.getElementById("section").style.color = "black";
}

document.getElementById("section").addEventListener("mouseover", backgroundRed);
document.getElementById("section").addEventListener("mouseout", backgroundGreen);


/* Provide an expression that returns the ID of the object initiating an event. Assume that the name of your event object is evt. */
function sendID(e) {
    console.log(e.target.id);
    document.getElementById("IdGiven").innerHTML = "The ID is " + e.target.id;
}
document.querySelector("#getID").addEventListener("click", sendID);

/* Provide an expression that returns the time that an event occurred in milliseconds. 
Assume that the name of your event object is evt. */
function updateTime(e) {
    console.log(e.timeStamp);
    document.querySelector("#time").innerHTML = e.timeStamp;
}
document.querySelector("#time").addEventListener("click", updateTime);

/* Provide JavaScript code to change the source of the first inline image in the document to introImg.png. */
function changePhoto() {
    document.images[0].src = "../images/introImg.png";
}
document.querySelector("#duck").addEventListener("click", changePhoto);

/* Provide JavaScript code to change the font family of the first h1 heading in the document to Arial. */

/* Provide the expression to create an object collection of all objects referenced by the CSS selector div#intro p. */

/* Provide the expression to return only the first paragraph referenced by the CSS selector div#intro p. */

