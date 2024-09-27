"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

/* Variables */

var reportHTML = "<h1>" + raceTitle + "</h1>";

/* For loop */

for (var i = 0; i < race.length; i++) {
  var totalVotes = 0;

  /* 
  Calculate the total votes cast in the current race by
  applying the forEach() method to i^th index of the votes array
  using the calcSum() function as the callback function.

  array.filter(callback [, thisArg])

  e.g.

  var scores = [92, 68, 83, 95, 91, 65, 77];
  var highScores = scores.filter(gradeA);
  function gradeA(value) {
    return value > 90;
  }
  
  or

  var scores = [92, 68, 83, 95, 91, 65, 77];
  var highScores = score.filter(gradeA, 92);
  function gradA(value) {
    return value >= this;
  }
  
  ---

  forEach(callback [, thisArg])
  */
  vote[i].forEach(function (value) {
    calcSum(value);
  });
}
  
  
/* Callback Function to calculate an array sum */
function calcSum(value) {
  totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
  return (100 * value) / sum;
}

/* Bar Chart Function */

/* Bar Chart Creation */

