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