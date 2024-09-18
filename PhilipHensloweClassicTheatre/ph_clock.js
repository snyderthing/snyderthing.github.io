"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: 
   Date:  

   Filename:   ph_clock.js     

*/

var minsLeft = 0; // to track the number of minutes left to submit the ticket order
var secsLeft = 10; // to track the number of seconds left within each minute
var timeLeft = minsLeft * 60 + secsLeft;

// run the countdown() function every second. Store this timed command in a variable
// named clockID
var clockID = setInterval("countdown()", 1000);

function countdown() { // used to update the minsLeft, secsLeft, and timeLeft variables
   // 8. a. Calculate a new value for the minsLeft variable by dividing
   // the timeLeft variable by 60 and using the Math.floor() method to
   // round that value down to the next lowest integer.
   minsLeft = Math.floor(timeLeft / 60);

   // 8. b. Calculate a new value for the secsLeft variable equal to the value
   // of the timeLeft variable minus 60 times the minsLeft variable.
   secsLeft = timeLeft - 60 * minsLeft;

   // 8. c. Create a new variable named minsString and set it equal
   // to the value returned by the addLeadingZero() function using minsLeft
   // as the parameter value
   var minsString = addLeadingZero(minsLeft);

   // 8. d. Call the addLeadingZero() function again using secsLeft as
   // the parameter value and store the result in the secsString variable
   var secsString = addLeadingZero(secsLeft);

   // 8. e. Within the element with the ID minutes, change text content to
   // the value of the minsString variable. Within the element with the ID
   // seconds, change the text content to the value of the secsString variable.
   document.getElementById("minutes").textContent = minsString;
   document.getElementById("seconds").textContent = secsString;

   // 8. f. Add a command to call the checkTimer() function.
   checkTimer();

   // 8. g. Use the decrement operator to decrease the value of the timeLeft
   // variable by 1.
   timeLeft--;

}

// 10. insert a function named stopClock(). Its function is to stop the clock
// once the time to submit the order has run out and to notify the user that
// the time has expired. The function has no parameters.
function stopClock() {
   // 10. a. User the insertAdjacentHTML() method to insert the following
   // HTML code <br>(Order Expired), directly before the end of the page
   // element with the ID TimeHead.
   document.getElementById("TimeHead").insertAdjacentHTML("beforeEnd", "<br>(Order Expired)");
   clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
