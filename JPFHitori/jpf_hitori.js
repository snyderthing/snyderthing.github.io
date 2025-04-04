"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: 
   Date:   

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

let allCells;

window.onload = startUp;

/* Displays the contents of Puzzle 1 after the page is loaded
   and sets up the initial event handlers. */
function startUp() {
   document.querySelector("#puzzleTitle").innerHTML = "Puzzle 1";

   document.querySelector("#puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);

   let puzzleButtons = document.querySelectorAll(".puzzles");
   for (let i = 0; i < puzzleButtons.length; i++) {
      puzzleButtons[i].onclick = switchPuzzle;
   }

   setupPuzzle();

   // document.querySelector("#check").addEventListener("click", findErrors);
   document.querySelector("#check").onclick = findErrors;

   document.querySelector("#solve").onclick = showSolution;
}

/* Switches the page between the three possible Hitori puzzles. */
function switchPuzzle(e) {
   if (confirm("Your work will be lost if you switch puzzles! Continue?")) {
      const puzzleID = e.target.id;
      document.querySelector("#puzzleTitle").innerHTML = e.target.value;

      switch (puzzleID) {
         case "puzzle1":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);
            break;
         case "puzzle2":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori2Numbers, hitori2Blocks, hitori2Rating);
            break;
         case "puzzle3":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori3Numbers, hitori3Blocks, hitori3Rating);
            break;
      }

      setupPuzzle();
   }
}

function setupPuzzle() {
   allCells = document.querySelectorAll("table#hitoriGrid td");
   for (let i = 0; i < allCells.length; i++) {
      allCells[i].style.backgroundColor = "white";
      allCells[i].style.color = "black";
      allCells[i].style.borderRadius = "0";
      allCells[i].addEventListener("mousedown", function (evt) {
         
         if (evt.shiftKey) {
            allCells[i].style.backgroundColor = "white";
            allCells[i].style.color = "black";
            allCells[i].style.borderRadius = "0";
         } else if (evt.altKey) {
            allCells[i].style.backgroundColor = "black";
            allCells[i].style.color = "white";
            allCells[i].style.borderRadius = "0";
         } else {
            allCells[i].style.backgroundColor = "rgb(101, 101, 101)";
            allCells[i].style.color = "white";
            allCells[i].style.borderRadius = "50%";
         }

         // Prevent the default action of selecting table text
         evt.preventDefault();

         
      });
      /*
      <div id="outer">
         <div id="inner"></div>
      </div>
      If you create a mouseenter event listener for the outer div element, the event will be triggered
      only for the outer div element. This is because the mouseenter event does not bubble through the 
      object hierarchy. On the other hand, the mouseover event does bubble and thus will be fired when the 
      pointer enters either outer div element or inner div elements. Unless you want the event triggered 
      for an element and all its descendants, you should listen only for the mouseenter event.
      */
      // Change the cursor
      allCells[i].addEventListener("mouseover", function (evt) {
         // change to jpf_eraser.png or the generic cursor named "alias" if the user is pressing the Shift key
         if (evt.shiftKey) {
            allCells[i].style.cursor = "url(jpf_eraser.png), alias";
         } else if (evt.altKey) {
            allCells[i].style.cursor = "url(jpf_block.png), cell";
         } else {
            allCells[i].style.cursor = "url(jpf_circle.png), pointer";
         }
      });

      allCells[i].addEventListener("mouseup", checkSolution);
   }
}

function findErrors() {
   for (let i = 0; i < allCells.length; i++) {
      if (allCells[i].className === "blocks" && allCells[i].style.backgroundColor === "rgb(101, 101, 101)"
         || allCells[i].className === "circles" && allCells[i].style.backgroundColor === "black") {
         allCells[i].style.color = "red";
      }
   }

   setTimeout(function () {
      for (let i = 0; i < allCells.length; i++) {
         if (allCells[i].style.color === "red") {
            allCells[i].style.color = "white";
         }
      }
   },1000);
}



/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;
   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ((cellClass == "blocks" && cellColor !== "black") ||
         (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution() {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";


   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString += "</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}