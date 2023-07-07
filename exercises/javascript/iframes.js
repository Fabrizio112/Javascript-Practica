const d = document;

export function controlarLosFrames() {
    const mediaQueriesJavascript = window.matchMedia("(max-width:768px)")
    const $CONTAINER_FRAMES = document.querySelector("#container-frames")
    const $VIDEO_FRAME = document.querySelector("#video-frame")
    const $MAP_FRAME = document.querySelector("#map-frame")
    if (mediaQueriesJavascript.matches) {
        //console.log(mediaQueriesJavascript)
        eliminarLosEnlaces();
        let atributoVideo = $VIDEO_FRAME.src
        let atributoMap = "https://www.google.com.ar/maps/place/Nueva+Zelanda/@-38.9089084,153.7749794,4z/data=!3m1!4b1!4m6!3m5!1s0x6d2c200e17779687:0xb1d618e2756a4733!8m2!3d-40.900557!4d174.885971!16zL20vMGN0d19i"
        $VIDEO_FRAME.style.display = "none"
        $MAP_FRAME.style.display = "none"
        let $enlaceVideo = document.createElement("a");
        $enlaceVideo.href = atributoVideo
        $enlaceVideo.target = "_blank"
        $enlaceVideo.innerText = "Click aqui para visualizar el video"
        let $enlaceMapa = document.createElement("a")
        $enlaceMapa.href = atributoMap
        $enlaceMapa.target = "_blank"
        $enlaceMapa.innerText = "Click aqui para visualizar el Mapa"
        $CONTAINER_FRAMES.appendChild($enlaceVideo)
        $CONTAINER_FRAMES.appendChild($enlaceMapa)
    } else {
        $VIDEO_FRAME.style.display = "flex"
        $MAP_FRAME.style.display = "flex"
        eliminarLosEnlaces();
    }
}

function eliminarLosEnlaces() {
    const $enlaces = document.querySelectorAll("#container-frames a")
    $enlaces.forEach((el) => {
        el.remove();
    })
}