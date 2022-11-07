{
    console.log("Hello World");

    const changeBackgroundTableHeader = () => {
        const tableHeader = document.querySelectorAll(".js-tableHeader");

        for (let i = 0; i < tableHeader.length; i++) {
            tableHeader[i].classList.toggle("table__header--whiteBackground");
        }
    };

    const changeBackground = () => {
        const container = document.querySelector(".js-container");
        const nextMode = document.querySelector(".js-nextMode");

        container.classList.toggle("container--whiteBackground");
        nextMode.innerText = container.classList.contains("container--whiteBackground") ? "ciemny" : "jasny";
        changeBackgroundTableHeader();
    };

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", changeBackground);
    };

    init();
}