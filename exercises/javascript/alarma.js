const d = document;
export function inicializarLaAlarma(startAlarm, stopAlarm) {
    const $BUTTON_START = document.querySelector("#start-alarm")
    const $AUDIO = document.querySelector("#audio")
    d.addEventListener("click", (e) => {
        if (e.target.matches(startAlarm)) {
            $AUDIO.play();
            $BUTTON_START.disabled = true;
        }
        if (e.target.matches(stopAlarm)) {
            $AUDIO.currentTime = 0;
            $AUDIO.pause();
            $BUTTON_START.disabled = false;
        }
    })
}