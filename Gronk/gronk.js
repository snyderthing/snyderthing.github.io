/*

int year;
        Scanner scan = new Scanner(System.in);
        String another = new String("y");
    	
        while (another.equalsIgnoreCase("y"))
        {
            do
            {
        	
            System.out.print("Enter a year equal to or later than 1582: ");
            year = scan.nextInt();
            scan.nextLine();	// prevent scanner problem with nextInt... nextLine.
            } 
            while (year < 1582);
        	
            if (year >= 1582)
            {
                if (year % 4 == 0)
                {
                    if (year % 100 == 0 && year % 400 != 0)
                        System.out.println("" + year + " is not a leap year.");
                    else
                        System.out.println("" + year + " is a leap year.");
                }
                else
                    System.out.println("" + year + " is not a leap year.");
            }
            else
                System.out.println("" + year + " is not a leap year.");
        	
            System.out.print("Another? (y/n) ");
            another = scan.nextLine();
        }
        scan.close();
    }

*/

let year;
let another = "y";

while (another.toLowerCase() === "y") {
    do {
        year = parseInt(prompt("Enter a year equal to or later than 1582: "), 10);
    } while (year < 1582);

    if (year >= 1582) {
        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                alert(year + " is not a leap year.");
            } else {
                alert(year + " is a leap year.");
            }
        } else {
            alert(year + " is not a leap year.");
        }
    } else {
        alert(year + " is not a leap year.");
    }
    another = prompt("Another? (y/n) ");
}