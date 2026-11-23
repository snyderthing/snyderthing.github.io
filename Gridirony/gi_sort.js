"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 4

   Author: 
   Date: 
   
   Filename: gi_sort.js
   
   Global Variables:
   tableData
      An 2-dimensional array of the data found in the body of the web table
      
   dataCategories
      An array of the column titles found the head of the web table
      
   sortIndex
      The index number of the column by which the web table should be
      sorted where 0 = 1st column, 1 = 2nd column, etc.
      
   sortDirection
      A value indicating direction of the sorting where a value of 1 sorts 
      the data in ascending order and a value of -1 sorts the data in descending order
	
   
   
   Functions List:   
   defineDataArray()
      Extracts values from the body of the web table and stores them in the
      tableData array
      
   writeTableData()
      Writes the sorted data into the table rows and cells       
      
   defineColumns()
      Extracts values form the column heads of the web table and stores 
      them in the dataCategories array; also sets up the onclick event
      handlers for the column heads so that the table can be sorted by
      clicking a table heading cell.
           
   columnSort(e)
      Event handler function that sorts the table data when a column
      heading is clicked  
   
   dataSort2D(a, b)
      Compare function used to sort numeric and alphabetical data from
      a 2-dimensional array 
    

*/

/* Global Variables */
// store the data values in the web table
const tableData = [];

// store the text of the column headings
const dataCategories = [];

// store the index number of the table column used for sorting;
let sortIndex = 0;

// store whether the column is sorted in ascending order (1) or descending order (-1)
let sortDirection = 1;

/* Event Listener */
window.addEventListener("load", function () {
   defineDataArray();
   writeTableDate();
});

/*JavaScript Functions */

// Populate the tableData array as a two-dimensional array with 
// values taken from the rows and cells of the web table body.
function defineDataArray() {
   let tableRows = document.querySelectorAll("table.sortable tbody tr");
   for (let i = 0; i < tableRows.length; i++) {
      let rowCells = tableRow[i].children();
      const rowValues = new Array(rowCells.length);

      for (let j = 0; j < rowCells.length; j++) {
         rowValues[j] = rowCells[j].textContent;;
      }
      tableData[i] = rowValues;
   }
   tableData.sort(dataSort2D);
}

// Create the table body based on the sorted data.
function writeTableData() {
   
}

function dataSort2D(a, b) {
  if (isNaN(parseFloat(a[sortIndex])) === false) {
    return (a[sortIndex] - b[sortIndex]) * sortDirection;
  } else {
    var astring = a[sortIndex].toLowerCase();
    var bstring = b[sortIndex].toLowerCase();

    if (bstring > astring) return -sortDirection;
    if (bstring < astring) return sortDirection;
    return 0;
  }
}
