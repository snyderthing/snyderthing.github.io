const thisDate = new Date(); // stores a Date object containing the current date and time
const thatDate = new Date(2018, 4, 23, 14, 25, 5); // Stores May 23, 1995, 2:35:05 PM in the variable.
const thisDateStr = thisDate.toLocaleDateString();
const thatDateStr = thatDate.toLocaleDateString();

const dateDifference = (thisDate - thatDate) / (1000 * 60 * 60 * 24);
console.log(typeof (dateDifference));
console.log(dateDifference);
// const dateDifferenceStr = dateDifference.toLocaleDateString();

/* JavaScript dates are stored as numeric values equal to the number of milliseconds
between the specified date and January 1, 1970 at midnight. For example, a 
Date object for May 23, 2018 at 2:35:05 p.m. has a hidden value equal to
1,527,104,105,000 milliseconds. Fortunately, you don't have to work directly with this
value! Instead, there are some JavaScript methods used to extra information from
a Date object.

Methods of the Date object
Date                        Method                          Description                 Result
var thisDay =               thisDay.getSeconds()            seconds                     5
May 23, 2018 14:35:05       thisDay.getMinutes()            minutes                     35
                            thisDay.getHours()              hours                       14
                            thisDay.getDate()               day of the month            23
                            thisDay.getMonth()              month number, where         4
                                                            January = 0, Feb. = 1
                            thisDay.getFullYear()           year                        2018
                            thisDay.getDay()                day of the week, where
                                                            Sunday = 0, Monday = 1      3
                            thisDay.toLocaleDateString()    text of the date using      "5/23/2018" (U.S.)
                                                            local conventions
                            thisDay.toLocaleTimeString()    text of the time using      "2:35:05 PM"
                                                            local conventions


JavaScript methods to set values of the Date object
Date                        Date Method                     Description
var thisDay =               thisDay.setDate(value)          Sets the day of the month of "thisDay", where "value" is
new Date("May 23, 2018                                      an integer, ranging from 1 up to 31 (for some months)
14:35:05");                 thisDay.setFullYear(value)      Sets the four-digit year value of "thisDay", where
                                                            "value" is an integer
                            thisDay.setHours(value)         Sets the 24-hour value of "thisDay", where "value" is an 
                                                            integer ranging from 0 to 23
                            thisDay.setMilliseconds(value)  Sets the millisecond value of "thisDay", where "value" is
                                                            an integer between 0 and 999
                            thisDay.setMinutes(value)       Sets the minutes value of "thisDay", where"value" is an integer
                                                            ranging from 0 to 59
                            thisDay.setMonth(value)         Sets the month value of "thisDay", where "value" is an integer
                                                            ranging from 0 to 11
                            thisDay.setSeconds(value)       Sets the seconds value of "thisDay", where "value" is an 
                                                            integer ranging from 0 to 59
                            thisDay.setTime(value)          Sets the time value of "thisDay", where "value" is an integer
                                                            representing the number of milliseconds since midnight on
                                                            January 1, 1970

*/

document.getElementById("thisDate").textContent = thisDateStr;
document.getElementById("thatDate").textContent = thatDateStr;
document.getElementById("dateDifference").textContent = Math.floor(dateDifference); // rounding down to have just full days

/*
var currentDay = new Date("May 23, 2028 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();
*/