const testDate = document.querySelector('input[type="date"]');
// const convertedTestDate = new Date(Date.UTC(testDate.value));


// testDate.valueAsNumber += 7 * 60 * 60 * 1000;
testDate.addEventListener("input", calcDate);

      /*
      The input event fires when the value of an <input>, <select>, or <textarea> element has been 
      changed as a direct result of a user action (such as typing in a textbox or checking a checkbox).

      The input event is fired every time the value of the element changes. This is unlike the change 
      event, which only fires when the value is committed, such as by pressing the enter key or selecting 
      a value from a list of options. Note that the input event is not fired when JavaScript changes an 
      element's value programmatically.
      */

      /*
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

function calcDate() {
      const convertedTestDate = new Date(testDate.value);

      const thisDate = new Date(2025, 4, 8, 23, 25, 4); // stores a Date object containing
      const thatDate = new Date(2025, 4, 1, 23, 25, 5); // Stores mmm dd, yyyy, 2:35:05 PM in the variable.
      const thisDateStr = thisDate.toLocaleDateString();
      const thatDateStr = thatDate.toLocaleDateString();
      console.log("The type of testDate is: ", typeof (testDate));
      console.dir(testDate);
      console.log("The type of testDate.value is: ", typeof (testDate.value));
      console.log("The testDate.value is: ", testDate.value);
      console.log("The type of testDate.valueAsNumber is: ", typeof (testDate.valueAsNumber));
      console.log("The testDate.valueAsNumber is: ", typeof (testDate.valueAsNumber), testDate.valueAsNumber);



      console.log("The type of convertedTestDate is: ", typeof (convertedTestDate));
      console.log("The variable convertedTestDate is: ", convertedTestDate);
      console.log("The date from convertedTestDate is: ", convertedTestDate.getDate());
      console.log("The date from convertedTestDate is: ", convertedTestDate.getUTCDate());
      console.dir(convertedTestDate);

      const utcHours1 = convertedTestDate.setUTCHours(0);
      const utcHours2 = convertedTestDate.setHours(0);
      console.log("setUTCHours to 0", utcHours1);
      console.log("setHours(0) without UTC", utcHours2);
      console.log("thisDate toLocaleDateString()", thisDate.toLocaleDateString());

      /* Because JavaScript measures time difference in milliseconds, not
            days, the dateDifference variable stores the number of milliseconds
            between the two dates. To express this value
            in days, you need to divide the difference by the number of 
            milliseconds in one day. Because there are 1000 milliseconds in
            one second, 60 seconds in one minute, 60 minutes in one hour, and 
            24 hours in one day, the revised command becomes: */
      const dateDifference = (thisDate - thatDate) / (1000 * 60 * 60 * 24);
      // console.log("The type of dateDifference is: ", typeof (dateDifference));
      // console.log("dateDifference: ", dateDifference);
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
}