export function PostCard(props) {
    let { title, _embedded, date, slug } = props
    let urlImage = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : ""
    let formatDate = new Date(date).toLocaleString()

    return `<article class="post-card">
        <img src=${urlImage} alt="${title.rendered}">
        <h2>${title.rendered}</h2>
        <p>
        <time datatime="${date}">${formatDate}</time>
        <a href="#/${slug}" data-slug="${slug}">Ver Publicacion</a> 
        </p>
    </article>
`;
}