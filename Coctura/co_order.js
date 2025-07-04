"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Narvar Walker
   Date: 08/26/2021  
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function() {
   var orderForm = document.forms.orderForm;
   orderForm.elements.orderDate.value = new Date().toDateString();
   orderForm.elements.model.focus();


// runs the function that calculates the cost of the order
calcOrder();

// event handlers for the web form
orderForm.elements.model.onchange = calcOrder;
orderForm.elements.qty.onchange = calcOrder;

// variable that stores the collection of all the radio buttons
var planOptions = document.querySelectorAll('input[name="protection"]');
// now loop through that array and add event handling to each element
for (var i = 0; i < planOptions.length; i++) {
   planOptions[i].onclick = calcOrder;
   
   }
});

// Definition of the calcOrder() function
function calcOrder() {
   var orderForm = document.forms.orderForm;

   // Calculate the initial cost of the order
   var mIndex = orderForm.elements.model.selectedIndex;
   var mCost = orderForm.elements.model.options[mIndex].value;
   var qIndex = orderForm.elements.qty.selectedIndex;
   var quantity = orderForm.elements.qty.options[qIndex].value;

   // Initial cost = model cost x quantity
   var initialCost = mCost * quantity;
   orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

   // Retrieve the cost of the user's protection plan choice
   var pCost = document.querySelector('input[name="protection"]:checked').value * quantity;
  
   orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

   // Calculate order subtotal
   orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

   // Calculate the sales tax
   var salesTax = 0.05 * (initialCost + pCost);
   orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

   // Calculate the cost of the total order
   var totalCost = initialCost + pCost + salesTax;
   orderForm.elements.totalCost.value = formatUSCurrency(totalCost);

   // Store the order details
   orderForm.elements.modelName.value =
   orderForm.elements.model.options[mIndex].text;
   orderForm.elements.protectionName.value =
   document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;

}
   // definition of the formatNumber() function
   function formatNumber(val, decimals) {
      return val.toLocaleString(undefined,
         {minimalFractionDigits: decimals,
          maximumFractionDigits: decimals});
   }

   function formatUSCurrency(val) {
      return val.toLocaleString('en-US',
         {style: "currency", currency: "USD"} );
   }


