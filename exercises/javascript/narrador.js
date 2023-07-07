const d = document;
const w = window;

export function narradorLeeElTextoIngresado() {
    d.addEventListener("DOMContentLoaded", (e) => {
        const $LISTA_DE_NARRADORES = d.querySelector("#narrrador-options")
        let vocesDeNarradores = [];
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            vocesDeNarradores = w.speechSynthesis.getVoices()
            vocesDeNarradores.forEach((narrador) => {
                //console.log(narrador)
                let $opcionDeLista = document.createElement("option")
                $opcionDeLista.textContent = narrador.name;
                $opcionDeLista.value = narrador.name;
                $LISTA_DE_NARRADORES.appendChild($opcionDeLista)
            })
        })
        const $BOTON_NARRAR = document.querySelector("#narrar");
        d.addEventListener("click", (e) => {
            if (e.target === ($BOTON_NARRAR)) {
                let valorDelInputMensaje = document.querySelector("#texto-leer").value
                const $MENSAJE = new SpeechSynthesisUtterance();
                $MENSAJE.text = valorDelInputMensaje;
                $MENSAJE.voice = vocesDeNarradores.find((voz) => voz.name === $LISTA_DE_NARRADORES.value)
                if ($MENSAJE.voice === null) {
                    console.error("No se ha seleccionado una voz")
                } else {
                    speechSynthesis.speak($MENSAJE)
                }
            }
        })
    })
}