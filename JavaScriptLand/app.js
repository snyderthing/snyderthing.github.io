console.log("Hello from app.js!");

// let age = prompt("How old are you?");
// age = parseInt(age);
// if (age === 57) {
//     alert("Good age, man!");
// }



/* let random = Math.random();
if (random < 0.5) {
    console.log("It was less than 0.5.");
}

console.log(random);
 */
// -----------
/* const phrase = "lol";


function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (phrase === "stop") {
       console.log("red");
   } else if (phrase === "slow"){
       console.log("yellow");
   } else if (phrase === "go") {
           console.log("green");
   } else {
           console.log("purple");
   }
   
    //AND THIS LINE ↑↑↑↑↑
}

getColor(phrase);
 */

// Set firstName field
document.getElementById("firstName").value = "Elmo";

// Set radio button value to CSS
document.getElementById("javascript").checked = true;

function setup() {
    console.log("The setup function ran because the page was loaded by the browser.");
}

window.onload = setup;

console.log("Goodbye.");
