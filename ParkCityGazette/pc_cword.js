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
let currentLetter;
let wordLetters;
let acrossClue;
let downClue;
let TypeDirection = "right";

window.onload = init;

/* Function List */

function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   // Declare the acrossID variable, setting its value equal to the value of 
   // the data-clue-a attribute for currentLetter. Declare the downID variable,
   // setting its value equal to the value of the data-clue-d attribute for currentLetter
   let acrossID = currentLetter.dataset.clueA;
   let downID = currentLetter.dataset.clueD;

   // Set the value of acrossClue to reference the element with the id attribute "acrossID". 
   // Set the value of downClue to reference the element with the id attribute "downID".
   acrossClue = acrossID;
   downClue = downID;
}


document.onkeydown = selectLetter;

document.getElementById("directionImg").onclick = switchTypeDirection;

document.getElementById("showErrors").onclick = function () {
   for (var i = 0; i < allLetters.length; i++) {
      if (allLetters[i].textContent !== allLetters[i].dataset.letter) {
         allLetters[i].style.color = "red";
      }
   }
   setTimeout(function () {
      for (var i = 0; i < allLetters.length; i++) {
         allLetters[i].style.color = "";
      }
   }, 3000);
};

document.getElementById("showSolution").onclick = function () {
   for (var i = 0; i < allLetters.length; i++) {
      allLetters[i].textContent = allLetters[i].dataset.letter;
   }
};


function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter;
   for (let i = 0; i < allLetters.length; i++) {
      allLetters[i].style.backgroundColor = "";
   }
   acrossClue.style.color = "";
   downClue.style.color = "";
   if (currentLetter.dataset.clueA != undefined) {
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";
      wordLetters = document.querySelectorAll("[data-clue-A = " + currentLetter.dataset.clueA + "]");
      for (let i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
   }
   
   if (currentLetter.dataset.clueD != undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-D = " + currentLetter.dataset.clueD + "]");
      for (let i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
   }

   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
