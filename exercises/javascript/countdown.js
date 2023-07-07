const d = document;
export function inicializarElCountdown(fechaDeInicio) {
    let contadorDeTiempo = setInterval(() => {
        const fechaIngresada = new Date(fechaDeInicio).getTime();
        const fechaInicioCountdown = new Date().getTime();
        let restaFechas = fechaIngresada - fechaInicioCountdown
        const $RESULTADOS = document.getElementById("resultados")
        let objetoRespuesta = {
            dias: Math.floor(restaFechas / (1000 * 60 * 60 * 24)),
            horas: Math.floor(restaFechas % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutos: Math.floor(restaFechas % (1000 * 60 * 60) / (1000 * 60)),
            segundos: Math.floor(restaFechas % (1000 * 60) / 1000),

        }
        $RESULTADOS.innerText = `Dias:${objetoRespuesta.dias} , horas:${objetoRespuesta.horas} , minutos:${objetoRespuesta.minutos} , segundos:${objetoRespuesta.segundos}`;
        if (restaFechas < 0) {
            clearInterval(contadorDeTiempo);
            $RESULTADOS.innerText = "Se acabo la espera "
        }
    }, 1000)

}

