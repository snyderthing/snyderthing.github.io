"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

/* Store the current date and time */
var currentDay = new Date("May 23, 2028 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until January 1st */
var newYear = new Date("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
/* Because JavaScript measures time difference in milliseconds, not
   days, the daysLeft variable stores the number of milliseconds
   between January 1st and the current date. To express this value
   in days, you need to divice the difference by the number of 
   milliseconds in one day. Because there are 1000 milliseconds in
   one second, 60 seconds in one minute, 60 minutes in one hour, and 
   24 hours in one day, the revised command becomes: */
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24); // This results in 222.4339699074074 and the decimal is represented by "--"


/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";