const w = window;
export function verificarSiELUsuarioEstaOnline() {
    let statusConexion = w.navigator.onLine
    if (statusConexion) {
        estaOnline()
    } else if (statusConexion === false) {
        estaOffline();
    }
    w.addEventListener("online", estaOnline)
    w.addEventListener("offline", estaOffline)

}
function estaOnline() {
    const $CONEXION_USUARIO = document.querySelector("#texto-conection")
    $CONEXION_USUARIO.parentElement.style.opacity = 1;
    $CONEXION_USUARIO.parentElement.style.visibility = "visible"
    $CONEXION_USUARIO.parentElement.style.backgroundColor = "green"
    $CONEXION_USUARIO.textContent = "ONLINE"
    setTimeout(() => {
        $CONEXION_USUARIO.parentElement.style.opacity = 0;
        $CONEXION_USUARIO.parentElement.style.visibility = "hidden"
    }, 3000)


}
function estaOffline() {
    const $CONEXION_USUARIO = document.querySelector("#texto-conection")
    $CONEXION_USUARIO.parentElement.style.opacity = 1;
    $CONEXION_USUARIO.parentElement.style.visibility = "visible"
    $CONEXION_USUARIO.parentElement.style.backgroundColor = "red"
    $CONEXION_USUARIO.textContent = "OFFLINE"
    setTimeout(() => {
        $CONEXION_USUARIO.parentElement.style.opacity = 0;
        $CONEXION_USUARIO.parentElement.style.visibility = "hidden"
    }, 3000)

}