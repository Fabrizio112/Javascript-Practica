import { inicializarLaAlarma } from "../alarma.js";
import { funcionDelMenu } from "../menu.js";
import { inicializarElReloj } from "../reloj.js";
import { inicializarElMovimientoDeLaPelota } from "../pelota.js";
import { inicializarElCountdown } from "../countdown.js";
import { inicializarElBotonDeUp, clickearElBotonDeUp } from "../boton-up.js";
import { inicializarElDarkMode } from "../dark-mode.js";
import { controlarLosFrames } from "../iframes.js";
import { inicializarELTester } from "../tester.js";
import { userDevicesInfo } from "../user-devicesinfo.js";
import { verificarSiELUsuarioEstaOnline } from "../coneccion-red.js";
import { detectarCamaraWeb } from "../camara-web.js";
import { obtenerCoordenadasDelUsuario } from "../geolocalizacion.js";
import { filtroDeBusqueda } from "../filtro-busqueda.js";
import { realizarElSorteo } from "../sorteo-digital.js";
import { sliderDeimagenes } from "../slider.js";
import { observarLasSecciones } from "../observador.js";
import { videoInteligente } from "../video-inteligente.js";
import { validarLasEntradasDeLosCamposDelFormulario } from "../validarFormularios.js";
import { narradorLeeElTextoIngresado } from "../narrador.js";
import { enviarElFormulario } from "../AJAX-envio-formulario.js";

const d = document;
const w = window;
d.addEventListener("DOMContentLoaded", e => {
    funcionDelMenu("#hamburger-menu", "#menu-options ul li")
    inicializarElReloj("#start-clock", "#stop-clock")
    inicializarLaAlarma("#start-alarm", "#stop-alarm")
    inicializarElMovimientoDeLaPelota();
    inicializarElCountdown("April 30 2024 00:00:00")
    clickearElBotonDeUp("#upper-button");
    controlarLosFrames();
    inicializarELTester("form");
    userDevicesInfo("user-devices")
    detectarCamaraWeb();
    obtenerCoordenadasDelUsuario();
    realizarElSorteo("#button-random")
    sliderDeimagenes("#left-btn", "#right-btn")
    observarLasSecciones();
    videoInteligente();
    enviarElFormulario();
})

w.addEventListener("scroll", e => {
    inicializarElBotonDeUp();
})
w.addEventListener("resize", () => {
    controlarLosFrames();
})
verificarSiELUsuarioEstaOnline()

inicializarElDarkMode("#dark-mode");

filtroDeBusqueda();
validarLasEntradasDeLosCamposDelFormulario();
narradorLeeElTextoIngresado();
