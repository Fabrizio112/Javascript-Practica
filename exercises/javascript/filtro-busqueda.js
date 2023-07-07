const d = document;
export function filtroDeBusqueda() {
    const $BARRA_BUSQUEDA = d.querySelector("#filter-search")
    d.addEventListener("keyup", (e) => {
        if (e.target === $BARRA_BUSQUEDA) {
            let valorDeLaBarraDeNavegacion = $BARRA_BUSQUEDA.value
            let expresionRegularNavegacion = new RegExp(valorDeLaBarraDeNavegacion, "i")
            d.querySelectorAll("figcaption").forEach((titulo) => {
                //console.log(expresionRegularNavegacion)
                if (expresionRegularNavegacion === /(?:)/i) {
                    titulo.parentElement.style.display = "block";
                } else {
                    if (expresionRegularNavegacion.test(titulo.textContent)) {
                        titulo.parentElement.style.display = "block";
                    } else {
                        titulo.parentElement.style.display = "none"
                    }
                }

            })
        }
    })
}