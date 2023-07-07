export function FormularioSearch() {
    let $FormularioSearch = document.createElement("form"),
        $input = document.createElement("input");

    $FormularioSearch.classList.add("form-search")
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar..."
    $input.autocomplete = "off"
    $FormularioSearch.appendChild($input)

    document.addEventListener("search", e => {
        if (!e.target.matches("input[type='search']")) return false
        if (!e.target.value) {
            localStorage.clear("wpSearch")
        }
    })

    document.addEventListener("submit", e => {
        if (!e.target.matches(".form-search")) return false
        e.preventDefault()
        localStorage.setItem("wpSearch", e.target.search.value)
        location.hash = `#/search?search=${e.target.search.value}`
    });

    return $FormularioSearch

}