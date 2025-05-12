const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");
const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
};

// logElement.innerText = `Initial value: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
      if (inputElement.valueAsDate !== null) {
            const changedDate = removeTimezoneOffset(inputElement.valueAsDate);
            // subtract 20 from the date
            createCalendar(calculateNoticeDate(changedDate));
            logElement.innerText = `The notice must be sent on or before ${changedDate.toLocaleDateString("en-US", options)}.`;
            
      } else {
            logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsDate}`;
      }
});

/* This function changes the original object. It doesn't return a different object */
function removeTimezoneOffset(date) {
      // get the offset and convert the offset to hours instead of minutes
      timezoneOffset = (date.getTimezoneOffset()) / 60;

      // add the offset
      date.setHours(date.getHours() + timezoneOffset);
      return date;
}

function calculateNoticeDate(date) {
      dateCopy = date;
      dateCopy.setDate(dateCopy.getDate() - 20);
      return dateCopy;
}

/*
const daysAgo = 20;
const testDate = new Date("2025-05-28");
console.log("testDate before removeTimezoneOffset: ", testDate);
removeTimezoneOffset(testDate);

console.log("testDate after removeTimezoneOffset: ", testDate);
earlierDate = subtractDays(testDate, daysAgo);
console.log("earlier Date using subtractDays: ", earlierDate);


function subtractDays(date, days) {
      dateCopy = date;
      dateCopy.setDate(dateCopy.getDate() - days);
      // console.log(date);
      return dateCopy;
}
*/
/*
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date

You can get and set the date value in JavaScript with the HTMLInputElement 
value and valueAsNumber properties. For example:
 
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
 
*/

/*
Have a look at https://javascript.info/date to see the example of "getDateAgo(new Date(), 1)"
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th 
and getDateAgo(new Date(), 2) should be 18th.
*/

/* Because JavaScript measures time difference in milliseconds, not
      days, the dateDifference variable stores the number of milliseconds
      between the two dates. To express this value
      in days, you need to divide the difference by the number of 
      milliseconds in one day. Because there are 1000 milliseconds in
      one second, 60 seconds in one minute, 60 minutes in one hour, and 
      24 hours in one day, the revised command becomes: */

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
function createCalendar(date) {
      
      let year = date.getFullYear();
      let month = date.getMonth();

      const day = document.querySelector(".calendar-dates");

      const currdate = document
            .querySelector(".calendar-current-date");

      const prenexIcons = document
            .querySelectorAll(".calendar-navigation span");

      // Array of month names
      const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
      ];

      // Function to generate the calendar
      const manipulate = () => {

            // Get the first day of the month
            let dayone = new Date(year, month, 1).getDay();

            // Get the last date of the month
            let lastdate = new Date(year, month + 1, 0).getDate();

            // Get the day of the last date of the month
            let dayend = new Date(year, month, lastdate).getDay();

            // Get the last date of the previous month
            let monthlastdate = new Date(year, month, 0).getDate();

            // Variable to store the generated calendar HTML
            let lit = "";

            // Loop to add the last dates of the previous month
            for (let i = dayone; i > 0; i--) {
                  lit +=
                        `<li class="inactive">${monthlastdate - i + 1}</li>`;
            }

            // Loop to add the dates of the current month
            for (let i = 1; i <= lastdate; i++) {

                  // Check if the current date is today
                  let isToday = i === date.getDate()
                        && month === new Date().getMonth()
                        && year === new Date().getFullYear()
                        ? "active"
                        : "";
                  lit += `<li class="${isToday}">${i}</li>`;
            }

            // Loop to add the first dates of the next month
            for (let i = dayend; i < 6; i++) {
                  lit += `<li class="inactive">${i - dayend + 1}</li>`
            }

            // Update the text of the current date element 
            // with the formatted current month and year
            currdate.innerText = `${months[month]} ${year}`;

            // update the HTML of the dates element 
            // with the generated calendar
            day.innerHTML = lit;
      }

      manipulate();

      // Attach a click event listener to each icon
      prenexIcons.forEach(icon => {

            // When an icon is clicked
            icon.addEventListener("click", () => {

                  // Check if the icon is "calendar-prev"
                  // or "calendar-next"
                  month = icon.id === "calendar-prev" ? month - 1 : month + 1;

                  // Check if the month is out of range
                  if (month < 0 || month > 11) {

                        // Set the date to the first day of the 
                        // month with the new year
                        date = new Date(year, month, new Date().getDate());

                        // Set the year to the new year
                        year = date.getFullYear();

                        // Set the month to the new month
                        month = date.getMonth();
                  }

                  else {

                        // Set the date to the current date
                        date = new Date();
                  }

                  // Call the manipulate function to 
                  // update the calendar display
                  manipulate();
            });
      });
}