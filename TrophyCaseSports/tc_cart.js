"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author:  
   Date:   
   
   Filename: tc_cart.js
	
*/

let orderTotal = 0;
// cartHTML holds HTML code to create the table showing the shopping cart items.
let cartHTML = "<table>" +
               "<tr>" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
               "</tr>";
// or
// let cartHTML = `<table>
//                <tr>
//                <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>
//                </tr>`;

// Loop over the items in the arrays that hold item details and add to the table.
for (let i = 0; i < item.length; i++) {
   cartHTML += `<tr>
                <td><img src='tc_${item[i]}.png' alt='${item[i]}' /></td>`;
   cartHTML += `<td>${itemDescription[i]}</td>
                <td>$${itemPrice[i]}</td>
                <td>${itemQty[i]}</td>`;

   // Calculate the cost of the item or items added.
   const itemCost = itemPrice[i] * itemQty[i];

   // Add the cost to the shopping cart for the item
   cartHTML += `<td>$${itemCost}</td></tr>`;

   // Update the shopping cart total of items with this item.
   orderTotal += itemCost;
}

// Show the order total and finish the table HTML.
cartHTML += `<tr>
             <td colspan='4'>Subtotal</td>
             <td>$${orderTotal}</td>
             </tr>
             </table>`;

// Write the shopping cart table to the web page.
document.getElementById("cart").innerHTML = cartHTML;