const d = document;
const n = navigator;
const ua = n.userAgent
export function userDevicesInfo(id) {
    const $ID = document.getElementById(id)
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        any: function () {
            return this.android() || this.ios();
        }
    }
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.windows() || this.mac() || this.linux();
        }
    }
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        opera: () => ua.match(/opera|opera mini/i),
        firefox: () => ua.match(/firefox/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
            return (
                this.chrome() ||
                this.safari() ||
                this.opera() ||
                this.firefox() ||
                this.ie() ||
                this.edge()
            )
        }
    }
    $ID.innerHTML = `
    <ul>
    <li>User Agent <b>${ua}</b></li>
    <li>Plataforma <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    <li>Navegador <b>${isBrowser.any()}</b></li>
    </ul>
    `
}