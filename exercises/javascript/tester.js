const d = document;
const w = window;

export function inicializarELTester(form) {
    const $FORM = document.getElementById(form)
    let ventana;
    d.addEventListener("submit", (e) => {
        if (e.target === $FORM) {
            e.preventDefault();
            ventana = window.open($FORM.direccion.value, "google", `width=${$FORM.ancho.value},height=${$FORM.alto.value}`)
        }
    })
    d.addEventListener("click", e => {
        if (e.target === $FORM.cerrar) {
            ventana.close();
        }
    })

}