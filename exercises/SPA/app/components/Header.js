import { FormularioSearch } from "./FormularioSearch.js"
import { Menu } from "./Menu.js"
import { Title } from "./Title.js"

export function Header() {
    let $header = document.createElement("header")
    $header.classList.add("header")
    $header.appendChild(Title())
    $header.appendChild(Menu())
    $header.appendChild(FormularioSearch())

    return $header
}