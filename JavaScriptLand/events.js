function quack() {
    console.log("quack");
    document.forms[1].onsubmit = function () {
        if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
        return false;
    }
}

// window.onload = quack;
// window.onload = setForm;
/* https://www.htmlgoodies.com/javascript/using-multiple-javascript-onload-functions/ */


/*

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}

*/

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
function changeH1Font() {
    document.querySelector("h1").style.fontFamily = "Arial";
}
document.querySelector("#fontChange").onclick = changeH1Font;

/* Provide the expression to create an object collection of all objects referenced by the CSS selector div#intro p. */
function displayParagraphs() {
    const paragraphs = document.querySelectorAll("div#intro p");
    console.log(paragraphs.length);
}

document.querySelector("#pCounter").addEventListener("click", displayParagraphs);

/* Provide the expression to return only the first paragraph referenced by the CSS selector div#intro p. */

function showParagraph1() {
    const paragraph = document.querySelector("div#intro p");
    console.log(paragraph.innerHTML);
}
document.querySelector("#firstParagraph").addEventListener("click", showParagraph1);

document.getElementById("duck").onmousemove = trackPointer;

function trackPointer(e) {
    var hPos = e.clientX;
    var vPos = e.clientY;
    document.getElementById("imgLoc").innerText = " (" + hPos + ", " + vPos + ")";
}

/* Add and remove an event listener.
Add it when one moves the mouse over the first div and remove it when 
moving the mouse over the second div.

*/
document.querySelector("#entrance").addEventListener("mouseenter", colorChange);
function colorChange(e) {
    e.target.style.backgroundColor = "#85A98F";
    e.target.style.color = "#525B44";
}

document.querySelector("#exit").addEventListener("mouseenter", colorRestore);
function colorRestore(e) {
    removeEventListener("mouseenter", colorChange);
    document.querySelector("#entrance").style.backgroundColor = "#525B44";
    document.querySelector("#entrance").style.color = "white";
}

/*
Use "preventDefault() on one submit button, but not on the other."
*/

function setForm() {
    document.forms[0].onsubmit = function () {
        console.log("setForm has been run.");
        if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
        return false;
    }
}


document.querySelector("input[type='submit']").onclick = myFunction1;

function myFunction1(e) {
    e.preventDefault();
    console.log("Fail");
}