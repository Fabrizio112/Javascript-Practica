const d = document;

export function videoInteligente() {
    const $video = document.querySelector("#smart-video");
    const observar = (entries) => {
        if (entries[0].isIntersecting) {
            $video.play()
        } else {
            $video.pause();
        }
    }
    const observador = new IntersectionObserver(observar, {
        threshold: 0.5
    })
    observador.observe($video)
    d.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible" ? $video.play() : $video.pause();
    })
}
