"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Narvar Walker
   Date:  08/26/2021 
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function(){
   // Retrieve the field/value pairs from the url
   var formData = location.search.slice(1);
   formData = formData.replace(/\+/g," ");
   formData = decodeURIComponent(formData);
   var formFields = formData.split(/[&=]/g);

   // Write the fields values to order form
   document.forms.order.elements.orderDate.value = formFields[1];
   document.forms.order.elements.modelName.value = formFields[5];
   document.forms.order.elements.qty.value = formFields[7];
   document.forms.order.elements.initialCost.value = formFields[9];
   document.forms.order.elements.protectionName.value = formFields[13];
   document.forms.order.elements.protectionCost.value = formFields[15];
   document.forms.order.elements.subtotal.value = formFields[17];
   document.forms.order.elements.salesTax.value = formFields[19];
   document.forms.order.elements.totalCost.value = formFields[21];

});

// additional event listener for the page load that focuses on the payment form
window.addEventListener("load", function() {
   // add event handlers to different parts of the form
   document.getElementById("subButton").onclick = runSubmit;
   document.getElementById("cardName").oninput = validateName;
   document.getElementById("cardNumber").oninput = validateNumber;
   document.getElementById("expMonth").onchange = validateMonth;
   document.getElementById("expYear").onchange = validateYear;
   document.getElementById("cvc").oninput = validateCVC;
});

function runSubmit() {
   validateName();
   validateCredit();
   validateNumber();
   validateMonth();
   validateYear();
   validateCVC();
}

function validateCVC() {
   var cardCVC = document.getElementById("cvc");
   var creditCard = document.querySelector('input[name="credit"]:checked').value;

   if (cardCVC.validity.valueMissing) {
      cardCVC.setCustomValidity("Enter your CVC number");
   } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
      cardCVC.setCustomValidity("Enter a 4-digit CVC number");
   } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
      cardCVC.setCustomValidity("Enter a 3-digit CVC number");
   } else {
      cardCVC.setCustomValidity("");
   }
}

function validateMonth() {
   var cardMonth = document.getElementById("expMonth");
   if (cardMonth.selectedIndex === 0) {
      cardMonth.setCustomValidity("Select the experation month");
   } else if { 
      cardMonth.setCustomValidity("");
   }
}

function validateYear() {
   var cardYear = document.getElementById("expYear");
   if (cardYear.selectedIndex === 0) {
      cardYear.setCustomValidity("Select the experation year");
   } else { 
      cardYear.setCustomValidity("");
   }
}



// definition of the validateNumber () function
function validateNumber() {
   var cardNumber = document.getElementById("cardNumber");
   if (cardNumber.validity.valueMissing) {
      cardNumber.setCustomValidity("Enter you card number");
   } else if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity("Enter a valid card number");
   } else if (luhn(cardNumber.value) === false) {
      cardNumber.setCustomValidity("Enter a legitimate card number");
   } else {
      cardNumber.setCustomValidity("");
   }
}

// definition of the validateCredit () function
function validateCredit() {
   var creditCard = document.forms.payment.elements.credit[0];
   if (creditCard.validity.valueMissing) {
      creditCard.setCustomValidity("Select your credit card");
   } else {
      creditCard.setCustomValidity("");
   }
}

// definition of the validateName () function
function validateName() {
   var cardName = document.getElementById("cardName");
   // check the validity of that object, if there is a valueMissin property, user must have left the field empty
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   } else { 
      cardName.setCustomValidity("");
   }
}

function sumDigits(numStr) {
   var digitTotal = 0;
   for (var i = 0; i < numStr.length; i++) {
      digitTotal += parseInt(numStr.charAt(i));
   }
   return digitTotal;
}

function luhn(idNum) {
   var string1 = "";
   var string2 = "";

   // Retrieve the odd-numbered digits
   for (var i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
    // Retrieve the even-numbered digits and double them
   for (var i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }

   // Return whether the sum of digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
}

