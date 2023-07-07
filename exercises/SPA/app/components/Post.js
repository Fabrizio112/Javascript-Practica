export function Post(props) {
    let { title, date, content } = props
    let formatDate = new Date(date).toLocaleString()
    return `
    <section class="post-page">
        <aside>
            <h2>${title.rendered}</h2>
            <time datetime="${date}">${formatDate}</time>
        </aside>
    <hr>
    <article>${content.rendered}</article>
    </section>
    `
}