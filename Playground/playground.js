/* Hide the color palette image when the container is clicked */

/* Get the header or whatever is at the top of the page */
const header = document.querySelector("header");

/* "image-container" is the element that contains the color palette image 
const container = document.getElementById("image-container");
*/

/* "color-palette" is the element that represents the color palette image */
const image = document.getElementById("color-palette");

/* Add a click event listener to the container that toggles the "hidden" class on the image 
container.addEventListener("click", function () {
    image.classList.toggle("hidden");
});
*/
/* Add a click event listener to the header that toggles the "hidden" class on the image */
header.addEventListener("click", function () {
    image.classList.toggle("hidden");
});



/* Log a message to the console when the script is loaded */

console.log("Playground script loaded successfully.");

/* Play with Colt Steele lesson material */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10;
});


const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going on 30",
        score: 70,
        year: 2004
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All the Way",
        score: 71,
        year: 1996
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
];

const goodMovies = movies.filter(m => m.score > 80);
const goodTitles = goodMovies.map(m => m.title);

movies.filter(m => m.score > 80).map(m => m.title);

const badMovies = movies.filter(m => m.score < 70);
const recentMovies = movies.filter(m => m.year > 2000);

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
});