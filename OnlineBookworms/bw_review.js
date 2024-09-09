"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1
   Author: Hesbon Osoro
   Date: 12/10/22 
   
   Filename: bw_review.js
	
   Functions List:
   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.
   updateCount()
      Updates the count of characters in the wordCountBox
      element.
   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr
*/

/*=================================================================*/

/* 4.   Insert an event handler that runs the init() function when the page
        is loaded by the browser */
window.onload = init;

/* 5.   Create the init() function The purpose of the function is to define 
        the event listeners used in the page. */
function init() {
    // a. Declare the stars variable that stores an object collection 
    // of the reviewing stars, referenced by the 'span#stars img selector.
    // Define an object collection based on a CSS selector using the following
    // querySelectorAll() method
    // document.querySelectorAll(selector) where "selector" is the CSS selector
    // that the object collection is based on. 
    // The following statement creates an object collection named stars, which
    // stores each of the img elements from the stars span.
    var stars = document.querySelectorAll("span#stars img");

    // b. Loop through the star collection and for each star image in the collection
    // change the cursor style to "pointer" and add an event listener to run the
    // lightStars() function in response to the mouseenter event occurring over each star image.
    for (var i = 0; i < stars.length; i++) {
        stars[i].style.cursor = "pointer";
        stars[i].addEventListener("mouseenter", lightStars);
    }
    
    // c. After the for loop, add an event listener to the comment text area box that runs the 
    // updateCount() function in response to the keyup event.
    document.getElementById("comment").addEventListener("keyup", updateCount);
}
/* 6.   Create the lightStars() function. The purpose of the function is to color 
        a star when the user moves the mouse pointer over a star image in order to
        reflect the user's rating of the book. */
function lightStars(e) {
    // a. Daniel has stored the rating value of each star image in the img element's
    // 'alt' attribute. Store the value of the 'alt' attribute of the target of the 
    // event object in the 'starNumber' variable.
    var starNumber = e.target.alt;

    // b. Declare the stars variable containing the object collection referenced by the selector span#stars img
    var stars = document.querySelectorAll("span#stars img");

    // c. Loop through the stars collection with an index ranging from 0 up to less than the value of the
    // starNumber variable. Light every star in the collection by changing the src attribute of the star
    // image to the bw_star2.png file.
    for (var i = 0; i < starNumber; i++) {
        stars[i].src = "bw_star2.png";
    }
    // d. After the for loop, create another loop that loops through the stars collection with the index
    // ranging from the value of the starNumber variable to less than 5. Unlight every start in this col-
    // lection by changing the src attribute of the star image to the bw_star.png image file.
    for(var i = starNumber; i < 5; i++) {
        stars[i].src = "bw_star.png";
    }
    // e. Change the value of the input box with the id attribute "rating" to starNumber stars, where 
    // starNumber is the value of the starNumber variable
    document.getElementById("rating").value = starNumber + " stars";

    // f. When the mouse pointer moves off a star image, the lit stars should be unlit. Add an even
    // listener to the target of the event object that runs the turnOffStars() function in response to the 
    // mouseleave event.
    e.target.addEventListener("mouseleave", turnOffStars);

    // g. If the user clicks the star image, the selected rating should be set, which means moving the
    // mouse pointer off the star should not remove the rating. Add an event listener for the target of
    // the event object that runs an anonymous function removing the turnOffStars() function from
    // the mouseleave event.
    e.target.addEventListener("click", function () {
        e.target.removeEventListener("mouseleave", turnOffStars);
    });
}

/* 7.   Create the turnOffStars() function. The purpose of this function is to unlight the stars when the
        user moves the mouse pointer off the star images. */
    function turnOffStars(e) {
    // a. Declare the stars variable containing the object collection referenced by the selector 
    // span#stars img.
    var stars = document.querySelectorAll("span#stars img");

    // b. Loop through all images in the stars collection and change the src attribute of each image to 
    // the bw_star.png file.
    for(var i = 0; i < stars.length; i++) {
        stars[i].src = "bw_star.png";
    }
    // c. Change the value of the rating input box to an empty text string.
    document.getElementById("rating").value = "";
}

/* 8.   Create the updateCount() function that keeps a running total of the number of characters that the
        user has typed into the comment text area box. */
function updateCount() {
    // a. Declare the commentText variable that references the value stored in the comment text area box.
    var commentText = document.getElementById("comment").value;
    // b.   Use the countCharacters() function with commentText as the parameter value to calculate the
    //      number of characters in commentText. Store the value in the charCount variable.
    var charCount = countCharacters(commentText);
    // c.   Declare the wordCountBox that references the wordCount input box.
    var wordCountBox = document.getElementById("wordCount");
    // d.   Change the value stored in the wordCount input box to the text string charCount/1000 where 
    //      charCount is the value of the charCount variable.
    wordCountBox.value = charCount + "/1000";
    // e.   If charCount is greater than 1000, change the style of the wordCount input box to a white font
    //      on a red background, otherwise set the style to a black font on a white background.
    if(charCount > 1000) {
        wordCountBox.style.backgroundColor = "red";
        wordCountBox.style.color = "white";
    }
    else {
        wordCountBox.style.backgroundColor = "white";
        wordCountBox.style.color = "black";
    }
}

function countCharacters(textStr) {
  var commentregx = /\s/g;
  var chars = textStr.replace(commentregx, "");
  return chars.length;
}








