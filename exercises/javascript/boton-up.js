const d = document;
export function inicializarElBotonDeUp() {
    const $UPPER_BUTTON = document.getElementById("upper-button");
    if (window.scrollY >= 800) {
        $UPPER_BUTTON.style.opacity = 1;
        $UPPER_BUTTON.style.visibility = "visible"
    }
    if (window.scrollY < 800) {
        $UPPER_BUTTON.style.opacity = 0;
        $UPPER_BUTTON.style.visibility = "hidden"
    }
}
export function clickearElBotonDeUp(botonUpper) {
    d.addEventListener("click", e => {
        if (e.target.matches(botonUpper) || e.target.matches(`${botonUpper} *`)) {
            window.scroll(0, 0);
        }
    })
}