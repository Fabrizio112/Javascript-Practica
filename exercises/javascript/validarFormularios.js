const d = document;
export function validarLasEntradasDeLosCamposDelFormulario() {
    const $FORM = document.querySelector("#contact-form")
    d.addEventListener("keyup", (e) => {
        if (e.target === $FORM.name) {
            corroborarElElemento($FORM.name)

        }
        if (e.target === $FORM.email) {
            corroborarElElemento($FORM.email)
        }
        if (e.target === $FORM.asunto) {
            corroborarElElemento($FORM.asunto)
        }
        if (e.target === $FORM.comments) {
            let contenedorError = document.createElement("span")
            const regExpOfComments = /^[a-zA-Z0-9 ,.-]{1,256}$/
            if (regExpOfComments.test($FORM.comments.value)) {
                if (d.querySelector(`[name=error-${$FORM.comments.getAttribute("name")}]`) != null) {
                    d.querySelector(`[name=error-${$FORM.comments.getAttribute("name")}]`).remove()
                }
                $FORM.comments.classList.remove("invalid")
                $FORM.comments.classList.add("valid")
            } else if (!regExpOfComments.test($FORM.comments.value)) {
                if (d.querySelector(`[name=error-${$FORM.comments.getAttribute("name")}]`) != null) {
                    d.querySelector(`[name=error-${$FORM.comments.getAttribute("name")}]`).remove()
                }
                $FORM.comments.classList.remove("valid")
                $FORM.comments.classList.add("invalid")
                $FORM.comments.after(contenedorError);
                contenedorError.textContent = "Solo se pueden ingresar un maximo de 256 caracteres";
                contenedorError.setAttribute("name", `error-${$FORM.comments.getAttribute("name")}`)
                contenedorError.classList.add("error")
            }
        }
    })

}
function corroborarElElemento(a) {
    let contenedorError = document.createElement("span")
    if (a.validity.valid) {
        if (d.querySelector(`[name=error-${a.getAttribute("name")}]`) != null) {
            d.querySelector(`[name=error-${a.getAttribute("name")}]`).remove()
        }
        a.classList.remove("invalid")
        a.classList.add("valid")
    } else if (!a.validity.valid) {
        if (d.querySelector(`[name=error-${a.getAttribute("name")}]`) != null) {
            d.querySelector(`[name=error-${a.getAttribute("name")}]`).remove()
        }
        a.classList.remove("valid")
        a.classList.add("invalid")
        a.after(contenedorError);
        contenedorError.textContent = a.title;
        contenedorError.setAttribute("name", `error-${a.getAttribute("name")}`)
        contenedorError.classList.add("error")
    }
}

