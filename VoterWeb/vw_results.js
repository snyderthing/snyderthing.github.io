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
let reportHTML = `<h1>${raceTitle}</h1>`;
let totalVotes = 0;

/* For loop */
for (let i = 0; i < race.length; i++) {
  // let totalVotes = 0;
  totalVotes = votes.forEach(calcSum);
  reportHTML += `<table>
                 <caption>${race[i]}</caption>
                 <tr><th>Candidate</th><th>Votes</th></tr>`;
  reportHTML += candidateRows(i, totalVotes);
  reportHTML += `</table>`;
}
  
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
// document.getElementsByTagName("section")[0].innerHTML = "<h1>Hey</h1>";

/* Write indivitual table rows for each candidate, showing the
   candidate's name, party affiliation, vote total, and vote percentage. */
function candidateRows(raceNum, totalVotes) {
  let rowHTML = "";
  for (let j = 0; j < 3; j++) {
    const candidateName = candidate[raceNum][j];
    const candidateParty = candidate[raceNum][j];
    const candidateVotes = candidate[raceNum][j];
    const candidatePercent = calcPercent(candidateVotes, totalVotes);
    rowHTML += `<tr>
                <td>${candidateName} (${candidateParty})</td>
                <td>${candidateVotes.toLocaleString()} (${candidatePercent})</td>
                </tr>`;
  }
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
  totalVotes += value;
  console.log(totalVotes);
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
  return (100 * value) / sum;
}

/* Bar Chart Function */

/* Bar Chart Creation */

