const d = document;
export function FormularioContacto() {
    let $formularioContacto = document.createElement("section")
    $formularioContacto.id = "contact"
    $formularioContacto.innerHTML = `
       <h2>Contact Us</h2>
       <h3>Send your Comments</h3>
       <form id="contact-form" action="">
           <input name="name" type="text" placeholder="Escribe tu nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[a-zA-Z ]+$" required>
           <input name="email" type="email" placeholder="Escribe tu email" pattern="/^[a-z0-9.-]{1,30}@([a-z]{1,20}\.)[a-z]{2,3}$/"  title="Email incorrecto Ej: ejemplo@ejemplo.com" required>
           <input name="asunto" type="text" placeholder="Asunto a tratar" pattern="^[a-zA-Z0-9 ]+$" title="El asunto es requerido" required>
           <textarea cols="50" rows="5" name="comments" placeholder="Escribe tus Comentarios" title="Tu comentario no debe de exceder los 255 caracteres" required></textarea>
           <button type="submit" class="send">Enviar</button>
           <div id="contact-form-loader">
               <img src="" alt="">
           </div>
           <div id="contact-form-response">
               <p></p>
           </div>
       </form>
    `
    function validarFormulario() {
        d.addEventListener("keyup", (e) => {
            const $FORM = document.querySelector("#contact-form")
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

    setTimeout(() => validarFormulario(), 100)
    d.addEventListener("submit", async (e) => {
        e.preventDefault()
        let respuestaFormulario = d.querySelector("#contact-form-response p ")
        let respuesta = await enviarFormularioAlServicioDeMails(e.target)
        respuestaFormulario.textContent = respuesta.message
        respuestaFormulario.classList.remove("oculto")
        e.target.reset()
        setTimeout(() => {
            respuestaFormulario.classList.add("oculto")
            respuestaFormulario.textContent = ""
        }, 3000)
    })
    async function enviarFormularioAlServicioDeMails(e) {
        try {
            let respuesta = await fetch("https://formsubmit.co/ajax/fabri.avila3@gmail.com", {
                method: "POST",
                body: new FormData(e)
            })
            let json = await respuesta.json()
            return json
        } catch (error) {
            console.log(error)
        }
    }
    return $formularioContacto
}