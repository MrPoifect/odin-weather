import "./ui-styles.css"


const searchBar = document.querySelector("form");

searchBar.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted")
})