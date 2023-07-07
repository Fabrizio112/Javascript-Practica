document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = async (el, url) => {
        try {
            let response = await axios(url)
            let json = await response.data
            el.outerHTML = json
        } catch (error) {
            console.error(error)
        }

    }

    document.querySelectorAll("[data-include]").forEach((el) => {
        includeHTML(el, el.getAttribute("data-include"))
    })
})