let enviar = document.getElementById("enviar");
let mostrar_lista = document.getElementById("mostrar_lista");
let html_salario = document.querySelector("#total_salario")
let html_h3 = document.getElementById("html_h3");

let total_salario = 0

let listado = [];

enviar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let salario = document.getElementById("salario").value;
    let departamento = document.getElementById("departamento").value;

    let nombreExiste = false;

    mostrar_empleados.style.display = "none";
    mostrar_lista.style.display = "flex";

    html_salario.style.color="white"
    html_salario.style.background="#007bff"

    for (let i = 0; i < listado.length; i++) {
        if (listado[i].nombre === nombre) {
            nombreExiste = true;
            break;
        }
    }

    if (!nombreExiste) {

        const empleado = {
            nombre: nombre,
            salario: salario,
            departamento: departamento
        };

        html_h3.innerHTML = `Listado empleados`
    
        listado.push(empleado);
        
        let salario_entero = parseInt(salario)
  
        total_salario += salario_entero

        html_salario.textContent = `Total salario = ${total_salario}`;

        let listado_Actual = mostrar_lista.innerHTML;

        html_salario.style.display="flex"

        mostrar_lista.innerHTML = `${listado_Actual}<br>${nombre}, ${salario}, ${departamento}</div>`;

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre ya está en la lista.",
            footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">¡No pulses!</a>'
        });
    }


});

let input_buscador = document.getElementById("input_buscador");
let botonbusca = document.getElementById("botonbusca");
let mostrar_empleados = document.getElementById("mostrar_empleados")


botonbusca.addEventListener("click", () => {
    let buscador_valor = input_buscador.value;

    let buscado = listado.find(B => B.nombre.toLowerCase() === buscador_valor.toLowerCase());

    html_salario.style.color="white"
    html_salario.style.background="white"

    if (buscado) {
        html_h3.innerHTML = `Resultado de la búsqueda`;

        mostrar_empleados.style.display = "flex";
        mostrar_lista.style.display = "none";

        mostrar_empleados.innerHTML = `
            <p>${buscado.nombre}</p> <br>
            <p>${buscado.salario}</p> <br>
            <p>${buscado.departamento}</p> <br>
        `;
    } else {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre no está en la lista.",
            footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">¡No pulses!</a>'
        });
    }

});











