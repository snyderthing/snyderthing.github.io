"usage strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date: 

*/
// Store the current date and time
var thisTime = new Date();
// var timeStr = thisTime.toLocaleString();

// Display the current date and time
document.getElementById("timeStamp").innerHTML = thisTime.toLocaleString();

// Sky Map
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;

// Determines the sky image based on the time 
var imgStr = "<img src='sd_sky" + mapNum + ".png'>";
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);