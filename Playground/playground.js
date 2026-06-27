const container = document.getElementById("image-container");
const image = document.getElementById("color-palette");

/*
container.addEventListener("click", function () {
    console.log("Container clicked");
    image.classList.toggle("hidden");
});
*/

container.addEventListener("click", function () {
    image.classList.toggle("hidden");
    console.log(image.className);
});