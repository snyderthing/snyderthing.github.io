function checkLeapYears() {

    let year;

    while (true) {

        let input = prompt("Enter a year equal to or later than 1582: ");

        if (input === null) {
            return; // Exit the function if the user cancels the prompt
        }

        year = parseInt(input, 10);

        if (year < 1582) {
            continue; // Prompt again if the year is less than 1582
        }

        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                alert(year + " is not a leap year.");
            } else {
                alert(year + " is a leap year.");
            }
        } else {
            alert(year + " is not a leap year.");
        }
    }
}

document.getElementById("leapYearButton").addEventListener("click", checkLeapYears);