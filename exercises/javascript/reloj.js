
const d = document
export function inicializarElReloj(botonStart, botonStop) {
    const $START_BUTTON = document.querySelector("#start-clock")
    d.addEventListener("click", e => {
        if (e.target.matches(botonStart)) {
            const $ELEMENT_TIME = document.createElement("span")
            const $CONTAINER_CLOCK = document.querySelector("#container-clock")

            setInterval(() => {
                let time = new Date;
                time = time.toLocaleTimeString();
                $ELEMENT_TIME.innerText = time;
            }, 1000)

            $CONTAINER_CLOCK.appendChild($ELEMENT_TIME)
            $START_BUTTON.disabled = true;
        }
        if (e.target.matches(botonStop)) {
            const $ELEMENT_TIME = document.querySelector("#container-clock span")
            $ELEMENT_TIME.remove();
            $START_BUTTON.disabled = false;
        }
    })
}