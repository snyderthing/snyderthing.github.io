"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: 
   Date: 
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

window.onload = init;

function init() {
   // 4. Create the init() function, which sets up the event handlers for the page.
   // Within the init() function, add the following commands:
   // a. Declare the calcButtons variable containing the collection of page elements belonging to the calcButton class.
   const calcButtons = document.querySelectorAll(".calcButton");
   // b. Loop through the calcButtons object collection and, for each button in that collection,
   // run the buttonClick() function in response to the click event.
   for (let i = 0; i < calcButtons.length; i++) {
      calcButtons[i].onclick = buttonClick;
   }
   // After the for loop, add a command that runs the calcKeys() function in response to the keydown event
   // occurring within the element with the ID "calcWindow".
   document.querySelector("#calcWindow").onkeydown = calcKeys;
}

// 5. Create the buttonClick() function. The purpose of this function is to change what appears
// in the calculator window when the user clicks the calculator buttons. 
function buttonClick(event) {
   // Add the following commands to the function:
   // a. Declare the calcValue variable equal to the value attribute of the calcWindow text area box.
   let calcValue = document.querySelector("#calcWindow").value;
   // b. Declare the calcDecimal variable equal to the value attribute of the decimals input box.
   let calcDecimal = document.querySelector("#decimals").value;
   // c. Each calculator button has a value attribute that defines what should be done with that button.
   // Declare the buttonValue attribute equal to the value attribute of the event object target.
   let buttonValue = event.target.value;
   // d. Create a switch-case structure for the following possible values of the buttonValue variable:
   //    i. For "del", delete the contents of the calculate window by changing calcValue to an empty text string.
   //    ii. For "bksp", erase the last character in the calculator window by changing calcValue to the
   //        value returned by the eraseChar() function using calcValue as the parameter value.
   //    iii. For "enter", calculate the value of the current expression by changing calcValue to:
   //             " = " + evalEq(calcValue, calcDecimal) + "\n"
   //         Note that \n is used to add a line return at the end of the answer.
   //    iv.  For "prev", copy the last equation in the calculator window by changing calcValue to the
   //         value returned by the lastEq() function using calcValue as the parameter value.
   //    v.   Otherwise, append the calculator button character to the calculator window by letting,
   //         calcValue equal calcValue plus buttonValue.
   switch (buttonValue) {
      case "del":
         calcValue = "";
         break;
      case "bksp":
         calcValue = eraseChar(calcValue);
         break;
      case "enter":
         calcValue = " = " + evalEq(calcValue, calcDecimal) + "\n";
         break;
      case "prev":
         calcValue = lastEq(calcValue);
         break;
      default:
         calcValue += buttonValue;
         break;
   }

   // e. After the switch-case structure, set the value attribute of the calcWindow text area box to calcValue.
   document.getElementById("calcWindow").value = calcValue;
   // f. Run the command document.getElementById("calcWindow").focus() to put the cursor
   //    focus within the calculator window.
   document.getElementById("calcWindow").focus();
}

// 6. Next, you will control the keyboard actions within the calculator window. Theresa wants you
// to program the actions that will happen when the user pressed the Delete, Enter, and up arrow keys.
// Add the calcKeys() function containing the following commands:
function calcKeys(event) {
   // a. As you did in the buttonClick() function function, declare the calValue and calcDecimal variables.
   let calcValue = document.querySelector("#calcWindow").value;
   let calcDecimal = document.querySelector("#decimals").value;
   const keyValue = event.key;
   // b. Create a switch-case structure for different values of the key attribute of the event objects as follows:
   switch (keyValue) {
   //    i.   For "Delete", erase the contents of the calculator window by changing calcValue to an empty text string.
      case "Delete":
         calcValue = "";
         break;
   //    ii.  For "Enter", add the following expression to calcValue:
      //             " = " + evalEq(calcValue, calcDecimal)
      case "Enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
         // Prevent browser from skipping a line
         event.preventDefault();
         break;
   //    iii. For "ArrowUp", add the following expression to calcValue
      //             lastEq(calcWindow.value)
      case "ArrowUp":
         calcValue += lastEq(calcValue);
         //    iv.  And then enter a command that prevents the browser from performing the default action in
         // response to the user pressing the up-arrow key.      
         // Prevent browser from moving up page.
         event.preventDefault();
         break;
   }
         // c. After the switch-case structure, set the value attribute of the calcWindow text area box to calcValue.
   document.querySelector("#calcWindow").value = calcValue;
}
   // 7. Document...

/* ===================================================================== */

function eraseChar(textStr) {
  return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
  var lines = textStr.split(/\r?\n/);
  var lastLine = lines[lines.length - 1];
  var eqValue = eval(lastLine);
  return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
  var lines = textStr.split(/\r?\n/);
  var lastExp = lines[lines.length - 2];
  return lastExp.substr(0, lastExp.indexOf("=")).trim();
}