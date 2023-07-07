const d = document;

export function observarLasSecciones() {
    const links = document.querySelectorAll("#menu-options ul li a")
    const seccions = document.querySelectorAll(`#section-sections [id*=section]`)
    const observar = (entries) => {
        entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
                links.forEach(link => {
                    if (link.href.endsWith(entrie.target.id)) {
                        link.classList.add("active")
                        link.parentElement.style.backgroundColor = "yellow";
                    } else {
                        link.classList.remove("active")
                        link.parentElement.style.backgroundColor = "transparent";
                    }
                })
            }
        })
    }
    const observador = new IntersectionObserver(observar, {
        threshold: 0.2
    })
    seccions.forEach((seccion) => {
        observador.observe(seccion)
    })
}