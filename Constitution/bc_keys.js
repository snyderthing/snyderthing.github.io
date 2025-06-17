"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: 
   Date:   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

/*
3. Add event listeners to run the findKeyWords() and makeKeyStyles() functions when the page is loaded.
*/

/*
I really don't know why the textbook teaches that the below
commands should not be written that way (p 837)

window.onload = findKeyWords();
window.onload = makeKeyStyles();

function findKeyWords() {
   alert("event1");
}

function makeKeyStyles() {
   alert("event2");
}
*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   var articleElem = document.getElementById("doc"); // Points to the main article 
   var asideElem = document.createElement("aside"); // Creates an element node for the aside element
   asideElem.setAttribute("id", "keywords"); // Creates the "keyword" id attribute for the aside element
   
   var mainHeading = document.createElement("h1"); // Creates an element node for the h1 element
   var headingText = document.createTextNode("Keyword List"); // Creates a text node containing the text string "Keyword List"
   mainHeading.appendChild(headingText); // Appends the text node to the h1 element

   asideElem.appendChild(mainHeading); // Appends the h1 heading to the aside element
   
   // 10.
   articleElem.insertBefore(asideElem, articleElem.firstChild); // Places the aside element before the first child element of the article element

   /*
      6. Create an ol element and append it to the 'keywords' "aside" element.
   */
   
   var outlineList = document.createElement("ol");
   asideElem.appendChild(outlineList);

   var keyWordElems = document.querySelectorAll("dfn");
   var keyWords = new Array(keyWordElems.length);
   for (var i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].textContent;
      var linkID = replaceWS(keyWords[i]);
      keyWordElems[i].setAttribute("id", "keyword_" + linkID);
   }
   /*
      8. Sort the keyWords array in alphabetical order.
   */
   keyWords.sort();
}

function makeKeyStyles() {
   console.log("makeKeyStyles");
}



/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
