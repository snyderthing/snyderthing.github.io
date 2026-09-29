'use strict';

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   

   Filename: hg_report.js

*/

/* Create the content for the article element which shows information about the game. */
let gameReport = '<h1>' + itemTitle + '</h1>' +
                 '<h2>By: ' + itemManufacturer + '</h2>' +
                 '<img src="hg_' + itemID + '.png" alt="' + itemID + '" id="gameImg" />' +
                 '<table>' +
                 '<tr><th>Product ID</th><td>' + itemID + '</td></tr>' +
                 '<tr><th>List Price</th><td>' + itemPrice + '</td></tr>' +
                 '<tr><th>Platform</th><td>' + itemPlatform + '</td></tr>' +
                 '<tr><th>ESRB Rating</th><td>' + itemESRB + '</td></tr>' +
                 '<tr><th>Condition</th><td>' + itemCondition + '</td></tr>' +
                 '<tr><th>Release</th><td>' + itemRelease + '</td></tr>' +
                 '</table>' +
                 itemSummary;
// Write the game information to the web page.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

/* Create the content for the aside element which contains a list of customer reviews. */
let ratingsSum = 0;
const ratingsCount = ratings.length;

// Calculate the total of the ratings.
for (let i = 0; i < ratingsCount; i++) {
   ratingsSum += ratings[i];
}

// Calculate the average rating.
const ratingsAvg = ratingsSum / ratingsCount;

let ratingReport = "<h1>Customer Reviews</h1>" +
                   "<h2>" + ratingsAvg +
                   " out of 5 stars (" + 
                   ratingsCount + 
                   " reviews)</h2>";

/* Display the content of the first three customer reviews. */
// The outer loop loops through the arrays holding the rating information.
for (let i = 0; i < 3; i++) {
   ratingReport += '<div class="review">' +
                   '<h1>' + ratingTitles[i] + '</h1>' +
                   '<table>' +
                   '<tr><th>By</th><td>' + ratingAuthors[i] + '</td></tr>' +
                   '<tr><th>Review Date</th><td>' + ratingDates[i] + '</td></tr>' +
                   '<tr><th>Rating</th><td>';
   // The inner loop adds a star to display the rating given 
   // by the customer reviewer selected in the outer loop.
   for (let j = 1; j <= ratings[i]; j++) {
      ratingReport += '<img src="hg_star.png" />';
   }
   // Close the table elements and add the review comments.
   ratingReport += '</td></tr></table>' +
                      ratingSummaries[i] +
                      '</div>';
}
// Write the reviews to the web page.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport