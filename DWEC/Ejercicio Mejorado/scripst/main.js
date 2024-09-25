import { addbook, findbook_title, books, getbooks } from "./books.js";
import { displaybooks, displaybooks_year } from "./display.js";

let  mostrar_libros = document.getElementById("resultado")

window.onload = () => {
    let array_del_localstorage = localSdtorage.getItem("Libros")
    if (array_del_localstorage == null) {
        return
    }

    let array_convertido = JSON.parse(array_del_localstorage)
    displaybooks(array_convertido)
    array_convertido.forEach(b =>{
        addbook(b)
    })
    

}

addbook({title: "Viaje Sin Retorno", author: " Frank J. Cavill", year: 2024})
addbook({title: "Metro 2033", author: "Dmitry Glukhovsky", year: 2022})
addbook({title: "Libro recetas", author: "Alguiñano", year: 2020})

const book = findbook_title("Metro 2033")
console.log("Libro encontrado", book);

displaybooks(getbooks());

displaybooks_year(books, "Metro 2033")

//INNERS

let boton_filtrar = document.getElementById("boton_filtrar")

boton_filtrar.addEventListener('click', () => {

    const titulo_busqueda = document.getElementById("titulo_busqueda").value

    let resultado = document.getElementById("resultado")
    let libro = findbook_title(titulo_busqueda)
    
    
    console.log(resultado);
    
    resultado.innerHTML=``
    resultado.innerHTML=`
        <div class="input_resultado" >
            <span class = "title">${libro.title}</span>
            <span class = "autor">${libro.author}</span>
            <span class = "año">${libro.year}</span>
        
        </div>
    `


    console.log(libro);
    
});

boton_guardar.addEventListener('click', function() {

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const año = document.getElementById("año").value;

    addbook({title:titulo, author:autor, year:año})

    mostrar_libros.innerHTML = ""

    books.forEach(i => {
        mostrar_libros.innerHTML += `
            <div class="input_resultado">
                <h3 class="title" >${i.title}</h3>
                <h5 class="autor" >Escrito por ${i.author}</h5>
                <h5 class="año" >Escrito en ${i.year}</h5>
            </div>
        `
    }) 
});

