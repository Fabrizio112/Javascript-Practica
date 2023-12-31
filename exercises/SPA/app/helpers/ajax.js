export async function ajax(props) {
    let { url, cbSuccess } = props

    await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "Ha ocurrido un error"
            document.querySelector("#main").innerHTML = `
        <div class="error">
        <p>Erorr ${err.status} : ${message}</p>
        </div>
        `
            document.querySelector(".loader").style.display = "none"
        })
}