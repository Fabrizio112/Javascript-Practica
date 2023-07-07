const n = navigator;
const d = document;
export function obtenerCoordenadasDelUsuario() {
    const $CONTAINER_GEOLOCATION = document.querySelector("#section8");
    const locationResolve = (position) => {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let accuracy = position.coords.accuracy
        $CONTAINER_GEOLOCATION.insertAdjacentHTML("beforeend", `<p>Tu posicion Actual es : <br></p>
        <span>Latitud : <b>${latitude}</b></span>
        <span>Longitud :<b> ${longitude}</b></span>
        <span>Precicion : <b>${accuracy}</b> metros</span>
        <a href="https://www.google.com.ar/maps/search/${latitude},${longitude}/@${latitude},${longitude}" target="_blank">Click aqui para visualizarlo en el mapa</a>`)
    }
    const locationReject = (error) => {
        //console.log(error)
    }
    if (n.geolocation) {
        n.geolocation.getCurrentPosition(locationResolve, locationReject)
    }


}
