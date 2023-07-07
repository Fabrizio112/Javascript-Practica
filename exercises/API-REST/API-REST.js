/* const d = document;
async function getData() {
    try {
        let datos = await fetch("https://jsonplaceholder.typicode.com/users");
        let usuarios = await datos.json();
        if (!datos.ok) throw { status: datos.status, statusText: datos.statusText }
        const $CONTENEDOR_USUARIOS = d.getElementById("container-usuarios");
        usuarios.forEach(usuario => {
            let p = d.createElement("p")
            p.textContent = `Usuario : ${usuario.name}  ,Email:  ${usuario.email}   ,Telefono: ${usuario.phone}`
            $CONTENEDOR_USUARIOS.appendChild(p)
        });
    } catch (error) {
        console.log(error)
    }



}
getData(); */