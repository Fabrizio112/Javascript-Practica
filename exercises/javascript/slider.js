const d = document;
export function sliderDeimagenes(botonAtras, botonSiguiente) {
    const arrayDeDivs = []
    d.querySelectorAll("#slider-container div").forEach((el, index) => {
        arrayDeDivs[index] = el;
    })


    d.addEventListener("click", (e) => {
        const divVisibleAlMomento = document.querySelector(".visible")
        if (e.target.matches(botonAtras)) {
            cambiarElDivVisibleLeft(divVisibleAlMomento, arrayDeDivs)
        }
        if (e.target.matches(botonSiguiente)) {
            cambiarElDivVisibleRight(divVisibleAlMomento, arrayDeDivs)
        }
    })
}

function cambiarElDivVisibleLeft(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a === b[i]) {
            a.classList.remove("visible");
            if (i === 0) {
                b[b.length - 1].classList.add("visible")
            } else {
                b[i - 1].classList.add("visible");
            }
        }
    }
}
function cambiarElDivVisibleRight(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a === b[i]) {
            a.classList.remove("visible");
            if (i === (b.length - 1)) {
                b[0].classList.add("visible")
            } else {
                b[i + 1].classList.add("visible");
            }
        }
    }
}