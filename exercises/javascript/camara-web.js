const w = window;
const d = document;
const n = navigator;
export function detectarCamaraWeb() {
    const $VIDEO = document.querySelector("#camara")
    n.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(source => $VIDEO.srcObject = source)
        .catch(err => console.error("Ha ocurrido un error ,vuelve a intentarlo mas tarde"))

}