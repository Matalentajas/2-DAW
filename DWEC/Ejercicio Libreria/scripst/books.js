const boton_ins = document.getElementById("enviar_ins")
const boton_bus = document.getElementById("enviar_bus")

let biblioteca = []

boton_ins.addEventListener('click', function() {

    const nombre_ins = document.getElementById("nombre_ins").value
    const autor_ins = document.getElementById("autor_ins").value
    const año_ins = document.getElementById("año_ins").value

    const añadir_libro = {
        nombre : nombre_ins,
        autor : autor_ins,
        año : año_ins
    }

    let busqueda_libro = biblioteca.find(nombre => nombre.nombre === nombre_ins)

    if (busqueda_libro) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que intentas ingresar un libro que ya esta en la base de datos",
            footer: '<a href="#">Informar de un error</a>'
          });
    } else{
        biblioteca.push(añadir_libro)

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Libro añadido con exito",
            showConfirmButton: false,
            timer: 1500
          });
    }
});

boton_bus.addEventListener('click', function() {
    const nombre_bus = document.getElementById("nombre_bus").value;

    let busqueda_libro = biblioteca.find(libro => libro.nombre === nombre_bus);

    if (busqueda_libro) {
        console.log("Libro encontrado:");
        console.log(busqueda_libro);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Libro no encontrado",
            footer: '<a href="#">Informar de un error</a>'
          });
    }
});

export default biblioteca;


