const d = document;

export function realizarElSorteo(id) {
    d.addEventListener("click", e => {
        if (e.target.matches(id)) {
            let arrayConValores = []
            d.querySelectorAll("#lista-items li").forEach((el, index) => {
                arrayConValores[index] = el.textContent
            })
            let numeroRandom = Math.round(Math.random() * (arrayConValores.length - 1))
            alert(`El Ganador es ${arrayConValores[numeroRandom]}`)
            console.log(`El Ganador es ${arrayConValores[numeroRandom]}`)
        }
    })
}