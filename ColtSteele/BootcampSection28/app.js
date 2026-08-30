const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // clear images here
    unStealImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    stealImages(res.data);
    form.elements.query.value = '';
});

const stealImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const unStealImages = () => {
    const images = document.body.querySelectorAll('img');
    for(let image of images) {
        image.remove();
    }
}

// axios.get("https://swapi.tech/api/people/1/")
//     .then((res) => {
//     console.log("RESPONSE: ", res);
// })
// .catch((e) => {
//     console.log("ERROR! ", e);
// });





/*
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(res.data.result.properties);
    } catch (e) {
        console.log("ERROR", e);
    }
};

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY";
    }
};

button.addEventListener('click', addNewJoke);
*/

/*

Hello everyone,

While following the upcoming videos, wherever you see that the swapi.dev API address is used, replace it with swapi.tech (i.e., replace the .dev part with .tech in the API address in the code).

Also, the structure returned from the swapi.tech API has changed slightly, and now, in the data you receive, you have to first access the result property, and then the properties property to see the expected response data. For example: console.log(data.result.properties)

Here is the updated JS code for the upcoming lectures:


loadStarWarsPeople();


- Lecture "Introducing Axios":
// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });
 
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
    console.log(res.data.result.properties);
  } catch (e) {
    console.log("ERROR", e);
  }
};
 
getStarWarsPerson(5);
getStarWarsPerson(10);

*/