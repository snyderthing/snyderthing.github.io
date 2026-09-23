"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);
/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   const currentDay = new Date();
   const dateStr = currentDay.toLocaleDateString();
   const timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   const newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   const millisecondsPerDay = 1000 * 60 * 60 * 24;
   const daysLeft = (newYear - currentDay) / millisecondsPerDay;

   /* Calculate the hours left in the current day */
   const hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   /* Calculate the minutes and seconds left in the current hour */
   const minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   const secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}