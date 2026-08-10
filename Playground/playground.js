

/* Hide the color palette image when the container is clicked */
const header = document.querySelector("header");
const image = document.getElementById("color-palette");
header.addEventListener("click", function () {
    image.classList.toggle("hidden");
});


/* Play with Colt Steele lesson material */

const button = document.querySelector("#colourBoxBtn");
const colourBoxText = document.querySelector("#colourBoxText");
button.addEventListener('click', function() {
    const newColour = makeRandomColour();
    document.querySelector("#colourBox").style.backgroundColor = newColour;
     colourBoxText.innerText = newColour;
});

const makeRandomColour = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

/* ----------- */

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value;
    const newListItem = document.createElement("LI");
    newListItem.innerText = catName;
    list.append(newListItem);
    input.value = "";
});

/* ----------- */

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = (usernameInput, tweetInput) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(usernameInput);
    newTweet.append(bTag);
    newTweet.append(` - ${tweetInput}`);
    tweetsContainer.append(newTweet);
}