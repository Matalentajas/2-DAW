import biblioteca from "./books";

function displayBooks(biblioteca) {
    books.forEach(libro => {
        const { nombre, autor, año } = libro;
        console.log(`Título: ${nombre}\nAutor: ${autor}\nAño: ${año}\n`);
    });
}

function filtrar(año_filtro) {

    let filtrar = biblioteca.filter(año_filtro)

    if (filtrar) {
        console.log(filtrar);
        
    } else{
        console.log("error");
        
    }
    
}

displayBooks(biblioteca);