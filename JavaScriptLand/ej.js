"use strict";
/*
let name = "";
name = prompt("Enter your name:");
document.getElementById("name").innerHTML = name;
*/

/* Create this using a loop
#
##
###
####
#####
######
#######
*/

// for (let i = 1; i <= 7; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "#";
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i));
// }

// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);

/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// for (let i = 1; i < 101; i++) {
//     let result = "";
//     if (i % 3 === 0) {
//         result += "Fizz";
//     }
//     if (i % 5 === 0) {
//         result += "Buzz";
//     }
//     if (result === "") {
//         result += i;
//     }
//     console.log(result);
// }

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// let size = 8;
// let board = "";

// for (let row = 0; row < size; row++) {
//     for (let col = 0; col < size; col++) {
//         /* 
//             row + col = 0 + 0, 0 + 1, 0 + 2....
//             so this will print every second column.
//         */
//         if ((row + col) % 2 === 0) {
//             board += " ";
//         } else { /* and this will print in the other columns */
//             board += "#";
//         }
//     }
//     board += "\n";
// }

// console.log(board);

/* Define the function min that takes two arguments and returns their minimum. */
// function min(arg1, arg2) {
//     if (arg2 > arg1) {
//         return arg1;
//     }
//     return arg2;
// }

/* Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, 
whole number) and return a Boolean. */

// function isEven (num) {
//     if (num === 0) {
//         return true;
//     } else if (num === -1) {
//         return false;
//     } else if (num > 0) {
//         return isEven(num - 2);
//     } else {
//         return isEven(num * -1);
//     }
// }

// function isEven(num) {
//     if (!Number.isSafeInteger(num)) {
//         return false;
//     }
//     if (num < 0) {
//         return isEven(-num);
//     }
//     if (num === 0) {
//         return true;
//     }
//     if (num === 1) {
//         return false;
//     }
//     return isEven(num - 2);
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??
// console.log(isEven(-7));
// console.log(isEven(-10));

/* Write a function called countBs that takes a string as its only 
argument and returns a number that indicates how many uppercase B 
characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that 
is to be counted (rather than counting only uppercase B characters). 
Rewrite countBs to make use of this new function. */

// const countBs = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "B") {
//             count++;
//         }
//     }
//     return count;
// }

const countBs = (str) => {
    return countChar(str, "B");
}

const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;

}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4