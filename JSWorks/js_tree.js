"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3
   Author: 
   Date:     
   Filename: js_tree.js
   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document
   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document
   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.
   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// Global Variables
let nodeCount = 0;
let elemCount = 0;
let textCount = 0;
let wsCount = 0;

// Event handler for the page load event
window.onload = makeTree;
// or
// window.addEventListener("load", makeTree);
// It runs the makeTree() function when the page is loaded.
// It is an event listener for the load even as opposed to an event handler.

/* JavaScript Functions */
function makeTree() {
   /*
      create:
      <aside id="treeBox">
         <h1>Node Tree</h1>
      </aside
      and append it to the 'section' element with the ID "main"
   */

// Create the aside element and its heading
  const mainSectionElem = document.getElementById("main");
  const asideElem = document.createElement("aside");
  const mainHeadingElem = document.createElement("h1");
  const headingText = document.createTextNode("Node Tree");
  
  asideElem.setAttribute("id", "treeBox");
  mainHeadingElem.appendChild(headingText);
  asideElem.appendChild(mainHeadingElem);
  mainSectionElem.appendChild(asideElem);

  // Create the ordered list that will contain the node tree.
  const nodeList = document.createElement("ol");
  asideElem.appendChild(nodeList);

  // Select the source article and create its node tree.
  const sourceArticle = document.querySelector("#main article");
  makeBranches(sourceArticle, nodeList);

  /* 18. Return to the makeTree() function and add commands to display
  the total count of nodes, elements nodes, text nodes, and whitespace
  nodes within the span elements whose IDs are "totalNodes", "elemNodes",
  "textNodes", and "wsNodes", respectively. */
  // Display the node counts.
  document.getElementById("totalNodes").textContent = nodeCount;
  document.getElementById("elemNodes").textContent = elemCount;
  document.getElementById("textNodes").textContent = textCount;
  document.getElementById("wsNodes").textContent = wsCount;
}

// Append node branches to the node tree diagram
function makeBranches(treeNode, nestedList) {
   nodeCount++;

   /* Create the following list item HTML fragment, storing the list item element in the
   'liElem' variable and the 'span' element node in the 'spanElem' variable.
       <li>
         +--<span></span>
       </li>
   */
  // Create a list item containing +-- and a span element.
   const liElem = document.createElement("li");
   const liText = document.createTextNode("+--");
   const spanElem = document.createElement("span");

   liElem.appendChild(liText);
   liElem.appendChild(spanElem);
   nestedList.appendChild(liElem);

   /*
      If treeNode represents an element node, then do the following:
         a. Increase the value of the elemCount variable by 1.
         b. Add the 'class' attribute to the spanElem node, settings its 
         value to "elementNode".
         c. Append the text string "<element>" to the spanElem node, 
         where 'element' is the name of the HTML element. (Hint: Use
         the textContent property to append the text of the element
         tag and not the element tag itself.)
   */
// Determine whether treeNode is an element or text node.
   if(treeNode.nodeType === 1) {

      // Element node
      elemCount++;
      spanElem.setAttribute("class", "elementNode");
      spanElem.textContent = "<" + treeNode.nodeName + ">";
      /* Else if treeNode represents a text node, do the following:
      a. Increase the value of the textCount variable by 1.
      b. Declare the variable 'textString' equal to the value of the text node.
      c. Jorge has provided a function named 'isWhiteSpaceNode()' to determine
      whether a text node represents white space or not. Call the isWhiteSpaceNode() 
      function using textString as the parameter value. If the function returns the
      value 'true', then do the following:
         i.   Increase the value of the wsCount variable by 1
         ii.  Change the class attribute of the spanElem node to "whiteSpaceNode"
         iii. Append the text string "#text" to the spanElem node 
      d. If the isWhiteSpaceNode() function returns the value 'false', then do the following:
         i.  Change the class attribute of the spanElem node to "textNode"
         ii. Append the text string "text" to the spanElem node where 'text' is
         the value of the textString variable.*/

   } else if (treeNode.nodeType === 3) {

      // Text node
      textCount++;
      const textString = treeNode.nodeValue;

      if(isWhiteSpaceNode(textString)) {

         // Whitespace text node
         wsCount++;
         spanElem.setAttribute("class", "whiteSpaceNode");
         spanElem.textContent = "#text";

      } else {

         // Ordinary text node
         spanElem.setAttribute("class", "textNode");
         spanElem.textContent = textString;
      }
   }
         /* ------- */
      /* Explore 
      17. The makeBranches() function should recursively move through the
      different levels of nodes in the source article. To apply recursion,
      test whether the number of child nodes of treeNode is greater than zero.
      If it is, then do the following:
         a. Create the following HTML fragment as an element node with the name newList:
               <ol>+</ol>
         b. Append newList to the nestedList element node.
         c. Loop through the child nodes of treeNode using n to represent each
         child node and, for each child node, call the makeBranches() function
         using n and newList as the parameter values.*/
   // Recursively create branches for child nodes.
   if (treeNode.childNodes.length > 0) {
      
      const newList = document.createElement("ol");
      newList.innerHTML = "|";
      nestedList.appendChild(newList);

      for (let n = treeNode.firstChild; n !== null; n = n.nextSibling) {
         makeBranches(n, newList);
      }
   }
}

function isWhiteSpaceNode(tString) {
  return !/[^\t\n\r ]/.test(tString);
}


/*
      for (let n = treeNode.firstChild; n !== null; n = n.nextSibling) {
         const newList = document.createElement("ol");
         newList.innerHTML = "|";
         nestedList.appendChild(newList);
         makeBranches(n, newList);
      }
*/