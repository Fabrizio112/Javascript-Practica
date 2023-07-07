import STRIPE_KEYS from "./stripe-keys.js"
const d = document,
    $CONTENEDOR_REMERAS = d.querySelector("#remeras"),
    $TEMPLATE_REMERAS = d.querySelector("#remeras-template").content,
    $FRAGMENT = d.createDocumentFragment();

const fetchOptions = {
    headers: {
        Authorization: `bearer ${STRIPE_KEYS.secret}`
    }
}

const formateadorDeMonedas = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`
let products, prices;
Promise.all([
    fetch(`https://api.stripe.com/v1/products`, fetchOptions),
    fetch(`https://api.stripe.com/v1/prices`, fetchOptions)])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(json => {
        products = json[0].data
        prices = json[1].data
        //console.log(products, prices)
        prices.forEach((el) => {
            let productData = products.filter((product) => product.id === el.product);
            console.log(productData[0])
            $TEMPLATE_REMERAS.querySelector(".remera").setAttribute("data-price", el.id)
            $TEMPLATE_REMERAS.querySelector("img").setAttribute("src", productData[0].images[0])
            $TEMPLATE_REMERAS.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${formateadorDeMonedas(el.unit_amount_decimal)} ${(el.currency).toUpperCase()}
            ` ;
            let $clone = d.importNode($TEMPLATE_REMERAS, true)
            $FRAGMENT.appendChild($clone)
        })
        $CONTENEDOR_REMERAS.appendChild($FRAGMENT)
    })

d.addEventListener("click", (e) => {
    if (e.target.matches(".remera") || e.target.matches(".remera *")) {
        let priced = e.target.parentElement.getAttribute("data-price");
        console.log(priced)
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems: [{ price: priced, quantity: 1 }],
            mode: "subscription",
            successUrl: "http://127.0.0.1:3000/Ejercicio6/Sucess.html",
            cancelUrl: "http://127.0.0.1:3000/Ejercicio6/Cancel.html",
        })
            .then(res => {
                if (res.error) {
                    $CONTENEDOR_REMERAS.insertAdjacentHTML("afterend", res.error.message)
                }
            })
    }
})