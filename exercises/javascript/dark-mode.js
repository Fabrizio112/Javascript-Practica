
const d = document;
const ls = localStorage;
export function inicializarElDarkMode(botonDark) {
    const $BODY = document.querySelector("body");
    const LIGHT_MODE = () => {
        $BODY.classList.remove("dark-mode")
    }
    const DARK_MODE = () => {
        $BODY.classList.add("dark-mode")
    }
    d.addEventListener("click", e => {
        if (e.target.matches(botonDark) || e.target.matches(`${botonDark} *`)) {
            if ($BODY.classList.value === "") {
                DARK_MODE();
                ls.setItem("theme", "dark")
            } else {
                LIGHT_MODE();
                ls.setItem("theme", "light")
            }
        }
    })

    d.addEventListener("DOMContentLoaded", e => {
        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }
        if (ls.getItem("theme" === "light")) {
            LIGHT_MODE();
        }
        if (ls.getItem("theme") === "dark") {
            DARK_MODE();
        }
    })
}
