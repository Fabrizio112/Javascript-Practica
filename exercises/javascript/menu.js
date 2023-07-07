
export function funcionDelMenu(contenedorMenu, link) {
    const $MENU = document.querySelector("#menu");
    const $CROSS = document.querySelector("#cross")
    let $MENU_DESPLEGABLE = document.querySelector("#menu-options");
    let d = document
    let mediaQuerie = window.matchMedia("(max-width:768px)")
    d.addEventListener("click", (e) => {
        if (mediaQuerie.matches) {
            if (e.target.matches(contenedorMenu) || e.target.matches(`${contenedorMenu} *`)) {
                if (getComputedStyle($MENU).getPropertyValue("display") === "block") {
                    $MENU_DESPLEGABLE.style.display = "block"
                    $MENU_DESPLEGABLE.style.opacity = 1;
                    $MENU_DESPLEGABLE.style.animation = "sacarElMenu .2s ease-in-out"
                    $MENU_DESPLEGABLE.style.visibility = "visible";
                    $MENU.style.display = "none";
                    $CROSS.style.display = "block";
                } else if (getComputedStyle($CROSS).getPropertyValue("display") === "block") {
                    $MENU_DESPLEGABLE.style.opacity = 0;
                    $MENU_DESPLEGABLE.style.animation = "guardarElMenu .2s ease-in-out"
                    $MENU_DESPLEGABLE.style.visibility = "hidden";
                    $CROSS.style.display = "none";
                    $MENU.style.display = "block";

                }
            }
            if (e.target.matches(link) || e.target.matches(`${link} *`)) {
                $MENU_DESPLEGABLE.style.opacity = 0;
                $MENU_DESPLEGABLE.style.animation = "guardarElMenu .2s ease-in-out"
                $MENU_DESPLEGABLE.style.visibility = "hidden";
                $CROSS.style.display = "none";
                $MENU.style.display = "block";
            }

        }
    })
}
