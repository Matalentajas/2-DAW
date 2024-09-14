let input_nombre = document.getElementById("nombre")
let input_edad = document.getElementById("edad")
let enviar = document.getElementById("enviar")
let volver = document.getElementById("volver")
let mensaje = document.getElementById("mensaje")

let form = document.getElementById("form")

let año = "0"

enviar.addEventListener("click", () => {

    let nombre=input_nombre.value
    let edad=input_edad.value

    let año = 2024-edad

    mensaje.style.display="block"
    form.style.display="none"
    volver.style.display="flex"

    mensaje.innerHTML=`Hola ${nombre} naciste en el año ${año}`

});

volver.addEventListener("click", () => {

    mensaje.style.display="none"
    form.style.display="flex"
    volver.style.display="none"


});