export function Menu() {
    let $menu = document.createElement("nav")
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Search</a>
    <span>-</span>
    <a href="#/contact">Contact</a>
    `
    return $menu
}