"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Nick
   Date:   1/6/2020
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

const item = new Array(10582, 23015, 41807, 10041);
// var item = [values];

const itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582",
                       "Tom Landry 1955 Football Card (unsigned), Item 23015",
                       "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
                       "Protective Card Sheets, Item 10041"];

const itemPrice = new Array(4);
itemPrice[0] = 149.93;
itemPrice[1] = 89.98;
itemPrice[2] = 334.93;
itemPrice[3] = 22.67;

const itemQty = [1, 1, 1, 4];