"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Hesbon Osoro
   Date: 12/10/22  
   
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

/* Function List */

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
}



/*====================================================*/

function getChar(keyNum) {
  return String.fromCharCode(keyNum);
}
