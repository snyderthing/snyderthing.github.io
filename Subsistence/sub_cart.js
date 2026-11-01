"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Hesbon Osoro
   Date: 12/10/22  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart); // Event listener for the load event. Runs the setupCart function when the page is loaded.

// Sets up the event handlers for the Add to Order buttons on the web page.
function setupCart() {
   const addButtons = document.getElementsByClassName("addButton"); // P. 684 "getElementsByClassName"
   for (let i = 0; i < addButtons.length; i++) {
      // add an event handle that runs the addItem() function when the button is clicked. P. 818, 834 Creating Event Handlers
      addButtons[i].onclick = addItem;
   }
}

function addItem(e) {
   // Use the 'nextElementSibling' property (P. 896) to reference the 
   // next sibling element to the target of the event object. 
   // Store the sibling element in the variable 'foodItem'.

   const foodItem = e.target.nextElementSibling;

   // Create the 'foodID' variable, which contains the value of the 'id' attribute for 'foodItem'. P 820
   const foodID = foodItem.id;

   // Use the cloneNode() method to create a copy of the foodItem element and all 
   // of its descendants. Store this node structure in the 'foodDescription' variable. P. 901
   const foodDescription = foodItem.cloneNode(true);

   // The shopping cart is stored in an 'aside' element with the ID "cart". Store 
   // the reference to this element in a variable named 'cartBox'.
   let cartBox = document.getElementById("cart");
   console.log(cartBox.children);
   console.log(cartBox.childNodes);
   // The shopping cart needs to determine whether a product ordered by the 
   // customer has already been ordered. To do this, you will add a 'span' 
   // element to the top of each item in the cart containing the number of 
   // items of each product ordered and update that value when a product
   // order is repeated. Do the following to create the order counter for 
   // each 'Subsistence' product.
   //
   // Create a variable named 'duplicateOrder' and set its initial value to 'false'.
   let duplicateOrder = false;

   // Loop through the element child nodes of 'cartBox'. For each node, determine whether 
   // the ID of the element node equals foodID. If it does, the customer has previously
   // placed that menu item in the cart. Increase the value of the first element child
   // of node by 1 to indicate an additional order and then break out of the 'for' loop. P. 906
   for (let n = cartBox.firstElementChild; n !== null; n = n.nextElementSibling) {
      if (n.id === foodID) {
         n.firstElementChild.textContent++;
         duplicateOrder = true;
         break;
      }
   }

   if (duplicateOrder === false) {
      let orderCount = document.createElement("span");
      orderCount.textContent = 1;
      foodDescription.insertBefore(orderCount, foodDescription.firstChild);
      cartBox.appendChild(foodDescription);
   }
}