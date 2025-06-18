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
   
   for (var i = 0; i < keyWords.length; i++) {
      var keyWordListItem = document.createElement("li");
      var keyWordLink = document.createElement("a");
      keyWordLink.innerHTML = keyWords[i].toString(); // this is an array, so maybe "textContent" isn't right.
      var linkID = replaceWS(keyWords[i]);
      keyWordLink.setAttribute("href", "#keyword_" + linkID); // two arguments needed
      keyWordListItem.appendChild(keyWordLink);
      outlineList.appendChild(keyWordListItem);
   }
   /*
      9. Next, generate the list items in the keyword list. Add a for loop that loops through each item in
      the keyWords array, doing the following for each item:
         a. Declare the keyWordListItem variable, storing an li element.
         b. Declare the keyWordLink variable storing an a element.
         c. Change the innerHTML of keyWordLink to the value of the text of the current keyword.
         d. Declare the linkID variable containing the value returned by the replaceWS() function using the current keyword as the parameter value.
         e. Change the href attribute of keyWordLink to "#keyword_linkID" where linkID is the value of the linkID variable.
         f. Append keyWordLink to keyWordList and then append keyWordList to the ordered list you created in step 6.
   */
}

function makeKeyStyles() {
   // Append an embedded style sheet to the document head
   var keywordsBoxStyles = document.createElement("style");
   document.head.appendChild(keywordsBoxStyles);

   // Add style rules to the embedded style sheet
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords { \
            border: 3px solid rgb(101, 101, 101); \
            float: right; \
            margin: 20px 0px 20px 20px; \
            padding: 10px; \
            width: 320px; \
         }", 0);
   
   document.styleSheets[document.styleSheets.length - 1].insertRule(
     "aside#keywords h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
         }", 1);
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol { \
            margin-left: 20px; \
            font-size: 1.2em; \
         }", 2);
   
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol li { \
            line-height: 1.5em; \
         }", 2);
   
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol li a { \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
         }", 3);
}
   /*
      11. Create the makeKeyStyles() function that will define the
          style sheet for the keywords box. Add the following 
          commands to the function:
          a. Create an embedded style sheet and append it to the document head.
          b. Add the following style rules to the style sheet:

          aside#keywords {
            border: 3px solid rgb(101, 101, 101);
            float: right;
            margin: 20px 0px 20px 20px;
            padding: 10px;
            width: 320px;
         }
         
         aside#keywords h1 {
            font-size: 2em;
            margin: 5px;
            text-align: center;
         }
         
         aside#keywords ol {
            margin-left: 20px;
            font-size: 1.2em;
         }
         
         aside#keywords ol li {
            line-height: 1.5em;
         }
         
         aside#keywords ol li a {
            color: rgb(101, 101, 101);
            text-decoration: none;
         }
   */





/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
