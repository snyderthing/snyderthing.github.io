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
   // Create an aside element with the ID "keywords" and containing an h1 heading with the text "Keyword List".
   // P. 900 Creating and Appending Nodes
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
   //
   // P. 926 To create or set an attribute for an element, you use the 'setAttribute()' method.
   // The following code creates a list item and then uses the 'setAttribute()' method to
   // set the ID value of the list item to the text string listHead1:
   // var listElem = document.createElement("li");
   // listElem.setAttribute("id", "listHead1");
   // The net effect is to create the following HTML fragment:
   // <li id="listHead1"></li>
   // 
   // For HTML attributes, however, it is still simpler to set an attribute value by applying
   // the HTML attribute as a property of the object as you did in the last tutorial.
   //
   // P. 823 Most HTML attributes can be accessed as properties of document objects. For example,
   // setting the src attribute in the following 'img' element
   //    <img id="logoImg" src="logo.png" />
   // can also be done by setting the src property of the 'document.images' object:
   //    document.images["logoImg"].src = "logo.png";
   // Step 5. Create an aside element with the ID "keywords" and containing an h1 heading with the text "Keyword List".
   const asideElem = document.createElement("aside");
   asideElem.setAttribute("id", "keywords");
   const mainHeading = document.createElement("h1");
   const headingText = document.createTextNode("Keyword List");
   mainHeading.appendChild(headingText);
   asideElem.appendChild(mainHeading);

   // Step 6. Create an ol element and append it to the keywords aside element.
   const olElem = document.createElement("ol");
   asideElem.appendChild(olElem);

   // Generate the list of keywords and add IDs to each keyword entry in the source article.
   // Create an object collection named "keyWordElems" referencing all 'dfn' elements within 
   // the doc article. (Hint: Use the 'querySelectorAll()' method.) Create an array named "keyWords" with a
   // length equal to the length of the keyWordElems collection. Add a for loop that loops through all 
   // the items in the KeyWordElems object collection, and for each item do the following:
   // a. Set the value of each item in the keyWords array to the text of the corresponding item in the 
   // 'keyWordElems' object collection.
   // b. Next, set the ID of the current item in the keyWords array. However, the ID cannot contain 
   // blank spaces. Norene has supplied you with the replaceWS() function to replace blank
   // spaces with the "_" character. Call the replaceWS() function with the current keyword as the 
   // parameter value and store the value returned by the function in the linkID variable. 
   // c. Set the ID of current item in the keyWordElems object collection to "keyword_linkID"
   // where 'linkID' is the value of the linkID variable.
   const keyWordElems = document.querySelectorAll("dfn");
   const keyWords = new Array(keyWordElems.length);
   let linkID = "";
   for (let i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].textContent;
      linkID = replaceWS(keyWords[i]);
      keyWordElems[i].setAttribute("id", "keyword_" + linkID);
   }
   // Sort the keyWords array in alphabetical order
   keyWords.sort();

   // Next, generate the list items in the keyword list. Add a for loop that loops
   //  through each item in the keyWords array, doing the following for each item:
   // a. Declare the keyWordListItem variable, storing an li element.
   // b. Declare the keyWordLink variable storing an 'a' element.
   // c. Change the innerHTML of keyWordLink to the value of the text of the current keyword.
   // d. Declare the linkID variable containing the value returned by the replaceWS()
   // function using the current keyword as the parameter value.
   // e. Change the href attribute of keyWordLink to "#keyword_linkID" where linkID is the
   // value of the linkID variable.
   // f. Append keyWordLink to keyWordListItem (added Item to the textbook) and then append
   // keyWordListItem (added again) to the ordered list you created in Step 6.
   for (let i = 0; i < keyWords.length; i++) {
      let keyWordListItem = document.createElement("li");
      let keyWordLink = document.createElement("a");
      keyWordLink.innerHTML = keyWords[i];
      let linkID = replaceWS(keyWords[i]);
      keyWordLink.setAttribute("href", "#keyword_" + linkID);
      keyWordListItem.appendChild(keyWordLink);
      olElem.appendChild(keyWordListItem);
   }
   // Insert the keywords list box you defined in Step 5 as the first child of the
   // article element with the ID "doc". P. 896 or 910
   // document.getElementById("doc").firstChild or firstElementChild (if you only want to work with elements)
   // 'node'.insertBefore('new', 'child') P. 902 - Inserts 'new' node directly before 'child' node (if no
   // 'child' node is specified then 'new' node is added as the last child node)
   // example of insertBefore() on P. 902.
   const articleElem = document.getElementById("doc");
   articleElem.insertBefore(asideElem, articleElem.firstChild);
}

// Create the makeKeyStyles() function that will define the style
// sheet for the keywords box.
function makeKeyStyles() {
   // Create an embedded style sheet and append it to the document head.
   const boxStyles = document.createElement("style");
   document.head.appendChild(boxStyles);

   // Add style rules to the embedded style sheet
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px; \
         padding: 10px; \
         width: 320px; \
      }", 0);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords h1 { \
         font-size: 2em; \
         margin: 5px; \
         text-align: center; \
      }", 1);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol { \
         margin-left: 20px; \
         font-size: 1.2em; \
      }", 2);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li { \
         line-height: 1.5em \
      }", 3);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li a { \
         color: rgb(101, 101, 101); \
         text-decoration: none; \
      }", 4);
}

/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
