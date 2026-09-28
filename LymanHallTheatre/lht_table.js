"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/

const thisDay = new Date("August 30, 2018");
let tableHTML = `<table id='eventTable'>
                  <caption>Upcoming Events</caption>
                     <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Price</th>
                     </tr>`;
                     
const endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for (let i = 0; i < eventDates.length; i++) {
   let eventDate = new Date(eventDates[i]);
   let eventDay = eventDate.toDateString();
   let eventTime = eventDate.toLocaleTimeString();
   if ((thisDay <= eventDate) && (eventDate <= endDate)) {
      tableHTML +=  `<tr>
                        <td>${eventDay} @ ${eventTime}</td>
                        <td>${eventDescriptions[i]}</td>
                        <td>${eventPrices[i]}</td>
                     </tr>`;
   }
}
   tableHTML += "</table>";
document.querySelector("#eventList").innerHTML = tableHTML;