const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});

console.log(cowsay.say({
    text: "I'm a moooooooodule",
    e: "oO",
    T: "U "
}));