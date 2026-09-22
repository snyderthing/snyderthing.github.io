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
const currentDay = new Date("May 23, 2018 14:35:05");
const dateStr = currentDay.toLocaleDateString();
const timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";
