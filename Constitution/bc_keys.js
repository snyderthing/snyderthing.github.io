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

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

/* Locates the keywords and generates the keyword list */
function findKeyWords() {
   // Create an aside element with the ID "keywords" and containing and h1 heading with the text "Keyword List".
   // var mainHeading = document.createElement("h1");
   // var headingText = document.createTextNode("Outline");
   // node.appendChild(new) - appends new node as a child of node
   // newEM = document.createElement("em");
   // text1 = document.createTextNode("Historic");
   // 
   // newP = document.createElement("p");
   // text2 = document.createTextNode(" Documents");
   //
   // newEM.appendChild(text1);
   // newP.appendChild(text2);
   //
   // newP.insertBefore(newEM, text2);
   // the above creates a paragraph element with the text "Historic Documents"
   // and the word "Historic" emphasized in an "em" element.
   var asideElem = document.createElement("aside");
   var mainHeading = document.createElement("h1");
}

function makeKeyStyles() {
   console.log("makeKeyStyles");
}




/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
