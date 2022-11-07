{
    console.log("Hello World");

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", () => {
            const container = document.querySelector(".js-container");
            const nextMode = document.querySelector(".js-nextMode");
            const tableHeader = document.querySelectorAll(".js-tableHeader");

            container.classList.toggle("container--whiteBackground");
            nextMode.innerText = container.classList.contains("container--whiteBackground") ? "ciemny" : "jasny";

            for (let i = 0; i < tableHeader.length; i++) {
                tableHeader[i].classList.toggle("table__header--whiteBackground");
            }
        });
    };

    init();
}