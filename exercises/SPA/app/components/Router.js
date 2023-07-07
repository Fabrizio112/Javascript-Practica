import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { FormularioContacto } from "./FormularioContacto.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
    const d = document,
        w = window,
        $main = d.querySelector("#main");

    $main.innerHTML = null;
    let { hash } = location
    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = "";
                posts.forEach(post => { html += PostCard(post) });
                document.querySelector("#main").innerHTML = html;

            }
        })
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch")
        if (!query) {
            document.querySelector(".loader").style.display = "none"
            return false
        }
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (results) => {
                console.log(results)
                let html = "";
                results.forEach(post => { html += SearchCard(post) });
                html ? document.querySelector("#main").innerHTML = html : document.querySelector("#main").innerHTML = `<h1>Results not found  with the term "<mark>${query}</mark>"</h1>`
            }
        });
    } else if (hash === "#/contact") {
        $main.appendChild(FormularioContacto())
    } else {
        await ajax({
            url: `${api.POST}?slug=${hash.slice(2)}`,
            cbSuccess: (post) => {
                document.querySelector("#main").innerHTML = Post(post[0])

            }
        })
    }
    document.querySelector(".loader").style.display = "none"
}