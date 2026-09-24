"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/

/* Execute the function to run and display the countdown clock */
showClock();
setInterval("showClock()", 1000);

/* Function to create and run the countdown clock */
function showClock() {
   /* Store the current date and time */
   const thisDay = new Date();
   const localDate = thisDay.toLocaleDateString();
   const localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = 
      "<span>" + localDate + "</span><span>" + localTime + "</span>";
   
   /* Calculate the days until July 4th */
   const j4Date = nextJuly4(thisDay);

   /* Set the time to 9:00 p.m. on July 4th */
   j4Date.setHours(21);

   /* Calculate the days until 9:00 p.m. on the next 4th of July*/
   const millisecondsPerDay = 1000 * 60 * 60 * 24;   
   const days = (j4Date - thisDay)/millisecondsPerDay;

   /* Calculate the hours left in the current day */
   const hrs = (days - Math.floor(days)) * 24;

   /* Calculate the minutes and seconds left in the current hour */
   const mins = (hrs - Math.floor(hrs)) * 60;
   const secs = (mins - Math.floor(mins)) * 60;

   /* Display the time left until 9:00 p.m. on July 4 */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}