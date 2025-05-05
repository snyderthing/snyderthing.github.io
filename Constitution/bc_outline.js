"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: 
   Date:   

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

/* Generate an outline based on h1 through h6 headings in the source document */

window.addEventListener("load", makeOutline);

function makeOutline() {
   // Location of the document outline
   var outline = document.getElementById("outline");

   // Source document for the outline
   var source = document.getElementById("doc");

   var mainHeading = document.createElement("h1"); // Creates an element node for the h1 element
   var outlineList = document.createElement("ol"); // Creates an element node for the ol element
   var headingText = document.createTextNode("Outline"); // Creates a text node containing the text string "Outline"

   mainHeading.appendChild(headingText); // Appends the text node to the h1 element
   outline.appendChild(mainHeading); // Appends the h1 heading to the outline
   outline.appendChild(outlineList); // Appends an ordered list to the outline

   createList(source, outlineList);
}

function createList(source, outlineList) {
   // Headings for the outline
   var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

   // Previous Level of the Headings
   var prevLevel = 0;

   // Running total of the article headings
   var headNum = 0;

   /* Loop through all of the child nodes of source
      article until no child nodes are left */
   
   for (var n = source.firstChild; n !== null; n = n.nextSibling) {
      // Examine only article headings
      var headLevel = headings.indexOf(n.nodeName);

      // Retrieve the text of each heading and append that text
      // to a list item in the outline list.
      if (headLevel !== -1) {
         // Add an id to the heading if it is missing
         headNum++;
         if (n.hasAttribute("id") === false) {
            n.setAttribute("id", "head" + headNum);
         }
         // creates an li element
         var listElem = document.createElement("li");
         
         // Create hypertext links to the document headings
         var linkElem = document.createElement("a");
         linkElem.innerHTML = n.innerHTML;
         linkElem.setAttribute("href", "#" + n.id);

         // Append the hypertext link to the list item
         listElem.appendChild(linkElem);

         // appends the li element to the outline list
         if (headLevel === prevLevel) {
            // Append the list item to the current list
            outlineList.appendChild(listElem);
         } else if (headLevel > prevLevel) {
            // Start a new nested list
            var nestedList = document.createElement("ol");
            nestedList.appendChild(listElem);
            
            // Append nested list to last item in the current list
            outlineList.lastChild.appendChild(nestedList);

            // Change the current list to the nested list
            outlineList = nestedList;
         } else {
            // Append the list item to a higher list
            // Calculate the difference between the current and previous levels
            var levelUp = prevLevel - headLevel;
            // Go up to the higer level
            for (var i = 1; i <= levelUp; i++) {
               outlineList = outlineList.parentNode.parentNode;
            }
            outlineList.appendChild(listElem);
         }

         // Update the value of prevLevel
         prevLevel = headLevel;
      }
   }
}