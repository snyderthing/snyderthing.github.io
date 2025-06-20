"use strict";

/*
   Author: 
   Date:   

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles);

function setStyles() {
   /*
      Christine wants users to be able to choose one of five fancy style sheets 
      to be randomly used when the page is opened. Declare the styleNum variable
      equal to the value returned by the randInt() function, using 5 as the parameter
      value.
   */
   var styleNum = randInt(5);
   /*
      Create an element node for the link element and set is rel attribute
      to "stylesheet", its id attribute to "fancySheet", and its href attribute 
      to "na_style_num.css" where "num" is the value of the styleNum variable.
      Append the fancySheet style element to the document head, adding it to
      the document's style sheets collection.
   */
   var linkElem = document.createElement("link");
   linkElem.setAttribute("rel", "stylesheet");
   linkElem.setAttribute("id", "fancySheet");
   linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
   document.head.appendChild(linkElem);

   /*
      Christine wants users to be able to choose between the five fancy style sheet themes 
      she has created by clicking thumbnail images from a figure box. Create an element
      node named figBox for the figure element. Set its id attribute to "styleThumbs" and
      append it to the div element with the ID "box".
   */
   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");
   var divBox = document.getElementById("box");
   divBox.appendChild(figBox);

   /*
      8. Next, populate the figure box with preview images of the five fancy style sheets. 
         Insert a for loop with an index that goes from 0 up through 4 and each time through
         the loop do the following:
         a. Create an img element node named sheetImg with a src attribute of "na_small_num.png"
            and an alt attribute value of "na_style_num.css" where num is the value of the index 
            in the for loop.
         b. Have the browser load a different style sheet when the user clicks one of the
            thumbnail images by adding an event handler to sheetImg that runs an anonymous
            function changing the href attribute of the link element with the ID "fancySheet"
            to the value of the alt attribute of the event target.
         c. Append sheetImg to the figBox element node.
   */
   for (var i = 0; i < 5; i++) {
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute("src", "na_small_" + i + ".png");
      sheetImg.setAttribute("alt", "na_style_" + i + ".css");
      sheetImg.onclick = function (e) {
         document.getElementById("fancySheet").href = e.target.alt;
      };
      figBox.appendChild(sheetImg);
   }
   /*
      9. Next, design the appearance of the thumbnail figure box. Create an embedded
         style sheet named thumbStyles and append it to the document head.
   */
   var thumbStyles = document.createElement("style");
   document.head.appendChild(thumbStyles);
   /*
      10. Add the following style rules to the thumbStyles style sheet:

         figure#styleThumbs {
            position: absolute;
            left: 0px;
            bottom: 0px;
         }
         
         figure#styleThumbs img {
            outline: 1px solid black;
            cursor: pointer;
            opacity: 0.75;
         }
         
         figure#styleThumbs img:hover {
            outline: 1px solid red;
            opacity: 1.0;
         }
   */
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs { \
            position: absolute; \
            left: 0px; \
            bottom: 0px;}", 0);
   
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75;}", 1);
   
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0;}", 2);
}

function randInt(size) {
   return Math.floor(size*Math.random());
}