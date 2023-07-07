const d = document;


export function inicializarElMovimientoDeLaPelota() {
    const $PELOTA = d.querySelector("#ball");
    const $CONTAINER = d.querySelector("#container-ball")
    d.addEventListener("keydown", (e) => {
        const limitePelota = $PELOTA.getBoundingClientRect()
        const limitEscenario = $CONTAINER.getBoundingClientRect()
        const estilosDePelota = getComputedStyle($PELOTA);
        const estilosLeft = parseInt(estilosDePelota.left);
        const estilosBottom = parseInt(estilosDePelota.bottom);
        if (e.key === "ArrowRight") {
            $PELOTA.style.left = estilosLeft + 5 + "px";
            e.preventDefault();
            if (limitePelota.right > limitEscenario.right) {
                $PELOTA.style.left = estilosLeft - 5 + "px";
            }
        } else if (e.key === "ArrowLeft") {
            $PELOTA.style.left = estilosLeft - 5 + "px";
            e.preventDefault();
            if (limitePelota.left < limitEscenario.left) {
                $PELOTA.style.left = estilosLeft + 5 + "px";
            }
        } else if (e.key === "ArrowUp") {
            $PELOTA.style.bottom = estilosBottom + 5 + "px";
            e.preventDefault();
            if (limitePelota.top < limitEscenario.top) {
                $PELOTA.style.bottom = estilosBottom - 5 + "px";
            }
        } else if (e.key === "ArrowDown") {
            $PELOTA.style.bottom = estilosBottom - 5 + "px";
            e.preventDefault();
            if (limitePelota.bottom > limitEscenario.bottom) {
                $PELOTA.style.bottom = estilosBottom + 5 + "px";
            }
        }
    })
}