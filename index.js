"use strict";

/* Execute the function to run and display the countdown clock */
showClock();
setInterval("showClock()", 1000);

function showClock() {
    /* Store the current date and time */
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
}