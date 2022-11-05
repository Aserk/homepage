console.log("Hello World");

let button = document.querySelector(".js-button");
let container = document.querySelector(".js-container");
let tableHeader = document.querySelectorAll(".js-tableHeader");
let nextMode = document.querySelector(".js-nextMode");

button.addEventListener("click", () => {
    container.classList.toggle("container--whiteBackground");
    nextMode.innerText = container.classList.contains("container--whiteBackground") ? "ciemny" : "jasny";

    for (let i = 0; i < tableHeader.length; i++) {
        tableHeader[i].classList.toggle("table__header--whiteBackground");
    }
});