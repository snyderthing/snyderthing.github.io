const container = document.getElementById("image-container");
const image = document.getElementById("color-palette");

container.addEventListener("click", function () {
    image.classList.toggle("hidden");
});

console.log("Playground script loaded successfully.");