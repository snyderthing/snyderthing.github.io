// Provide the general code to create a function named showReport() usign the function declaration format
function showReport1() {
    console.log("Just pretend that a report was shown to you.");
}

var showReport2 = function () {
    console.log("Just pretend that another report was shown to you.");
}

const element = document.getElementById("showReportButton");
element.addEventListener("click", showReport2);

// Provide the general code that runs an anonymous function in response to the click event on the form button with the ID "formReport"
document.querySelector("#formReport").addEventListener("click",
    function (event) {
        // event.preventDefault(); // Prevents form submission
        console.log("The formReport anonymous function ran.");
    }
);
let intervalId = null;
// Provide the general code to run an anonymous function every 2 seconds.
document.querySelector("#startInterval").addEventListener("click", function () {
    intervalId = setInterval(function () { console.log("Print every two seconds.") }, 2000)
});

document.querySelector("#stopInterval").addEventListener("click", function () {
    clearInterval(intervalId);
    console.log("Printing stopped.")
});

/*

// Provide the general code to run an anonymous function every 2 seconds.
document.querySelector("#startInterval").addEventListener("click", setInterval(function () { console.log("Print every two seconds.") }, 2000));

Your code causes an error because setInterval is being executed immediately instead of being passed as a callback to addEventListener.

Problem:
setInterval(function () { console.log("Print every two seconds."); }, 2000) is executed immediately when the script runs, returning an interval ID (a number).

addEventListener is expecting a function but instead receives this interval ID, causing an error.

Solution:
Wrap setInterval inside an anonymous function so that it executes only when the button is clicked:

javascript
Copy
Edit
document.querySelector("#startInterval").addEventListener("click", function () {
    setInterval(function () {
        console.log("Print every two seconds.");
    }, 2000);
});
This ensures that setInterval runs only when the button is clicked, and no immediate execution occurs when the script loads.

*/

// Provide code to display a confirm dialog box with the message "Export Report?". Store the results of the dialog box in the exportRep variable.
document.getElementById("confirmExport").addEventListener("click", function () {
    const exportRep = confirm("Export Report?");
    console.log(exportRep);
});

/*
Provide code to display a prompt dialog box with the message "Enter Report Name". Set the default value to the text string "Income Statement" and store the results of the dialog box in the reportName variable.
*/
document.querySelector("#reportName").addEventListener("click", function () { 
    const reportName = prompt("Enter Report Name", "Income Statement");
    console.log(reportName);
});

/*

Provide code to reference the data-* attributes for the following HTML element:
            
            <div id="report" data-title="Earnings Report"
                data-author="Sam Browne" 
                data-report-data="2018-07-01">
                ...
            </div>

*/

