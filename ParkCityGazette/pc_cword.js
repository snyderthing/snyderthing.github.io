"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: 
   Date:  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum
*/

/* Global variables */

let allLetters;
// References all of the letter cells in the crossword table#crossword

let currentLetter;
// References the letter currently selected in the puzzleLetter

let wordLetters;
// References the across and down letters in the word(s) associated with the current letter

let acrossClue;
// References the across clue associated with the current letter

let downClue;
// References the down clue associated with the current letter

let typeDirection = "down";

window.onload = init;

/* Function List */

/* init() function */
function init(event) {
   // Set the allLetters variable to reference the elements using the selector "table#crossword span"
   allLetters = document.querySelectorAll("table#crossword span");
   
   // Set the currentLetter variable to reference the first object in allLetters collection
   currentLetter = allLetters[0];

   // object.dataset.name
   // var employee = document.getElementById("employee");
   // var section = employee.dataset.section;
   // var position = employee.dataset.position;
   // <element data-name="value">      
   // Declare the acrossID variable, setting its value equal to the value of 
   // the data-clue-a attribute for currentLetter. 
   let acrossID = currentLetter.dataset.clueA;
   
   // Declare the downID variable,
   // setting its value equal to the value of the data-clue-d attribute for currentLetter
   let downID = currentLetter.dataset.clueD;

   // Set the value of acrossClue to reference the element with the id attribute "acrossID". 
   acrossClue = document.getElementById("across");
   // Set the value of downClue to reference the element with the id attribute "downID".
   downClue = document.getElementById("down");

   // Color the crossword puzzle's first letter
   formatPuzzle(currentLetter);

   // User to select a puzzle cell
   for (let i = 0; i < allLetters.length; i++) {
      allLetters[i].style.cursor = "pointer";
      allLetters[i].onmousedown = function (e) {
         formatPuzzle(e.target);
      }
   }
   document.onkeydown = selectLetter;

   let typeImage = document.getElementById("directionImg");
   typeImage.style.cursor = "pointer";
   typeImage.onclick = switchTypeDirection;

   document.getElementById("showErrors").onclick = function () {
      for (let i = 0; i < allLetters.length; i++) {
         if (allLetters[i].textContent !== allLetters[i].dataset.letter) {
            allLetters[i].style.color = "red";
         }
      }
      setTimeout(function () {
         for (let i = 0; i < allLetters.length; i++) {
            allLetters[i].style.color = "";
         }
      }, 3000);
   }

   document.getElementById("showSolution").onclick = function () {
      for (let i = 0; i < allLetters.length; i++) {
         allLetters[i].textContent = allLetters[i].dataset.letter;
      }
   }
}

/* formatPuzzle() function */
function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter;
   for (let i = 0; i < allLetters.length; i++) {
      allLetters[i].style.backgroundColor = "";
   }

   acrossClue.style.color = "";
   downClue.style.color = "";

   if (currentLetter.dataset.clueA !== undefined) {
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";
      wordLetters = document.querySelectorAll(
         "[data-clue-A = " + currentLetter.dataset.clueA + "]"
      );
      for (let i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
   }

   if (currentLetter.dataset.clueD !== undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll(
         "[data-clue-D = " + currentLetter.dataset.clueD + "]"
      );
      for (let i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
   }

   if (typeDirection == "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

/* selectLetter() function to allow users to select puzzle cells via keyboard */
function selectLetter(event) {
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   let upLetter = document.getElementById(currentLetter.dataset.up);
   let rightLetter = document.getElementById(currentLetter.dataset.right);
   let downLetter = document.getElementById(currentLetter.dataset.down);
   let userKey = event.keyCode;

   if (userKey === 37) {
      formatPuzzle(leftLetter);
   } else if (userKey === 38) {
      formatPuzzle(upLetter);
   } else if (userKey === 39 || userKey === 9) {
      formatPuzzle(rightLetter);
   } else if (userKey === 40 || userKey === 13) {
      formatPuzzle(downLetter);
   } else if (userKey === 8 || userKey === 46) {
      currentLetter.textContent = "";
   } else if (userKey === 32) {
      switchTypeDirection();
   } else if (userKey > 64 && userKey < 91) {
      currentLetter.textContent = getChar(userKey);
      if (typeDirection === "right") {
         formatPuzzle(rightLetter);
      } else {
         formatPuzzle(downLetter);
      }
   }
   event.preventDefault();
}

/* switchTypeDirection() function to toggle the typing direction between right and down */
function switchTypeDirection() {
   let typeImage = document.getElementById("directionImg");
   if (typeDirection === "down") {
      typeDirection = "right";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      typeDirection = "down";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
