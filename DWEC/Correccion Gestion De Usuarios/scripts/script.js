const empleados = []
let botonEnviar = document.getElementById("enviar")
let lista = document.getElementById("lista_em")
document.getElementById("msg").innerHTML = "No hay Datos"
botonEnviar.addEventListener("click", ()=>{
    let nombre = document.getElementById("nom")
    let salario = document.getElementById("sal")
    let departamento = document.getElementById("dep")
    console.log(nombre.value, salario.value, departamento.value);
    empleados.push(
        {
            "nombre": nombre.value,
            "salario": salario.value,
            "departamento": departamento.value
        }
    )
    nombre.value = ""
    salario.value = ""
    departamento.value = null
    document.getElementById("msg").style.display = "none"
    console.log(empleados); 
    lista.innerHTML=""
    for(let i=0; i<empleados.length; i++) {
        let textoDepartamento={
            des:'Desarrollo',
            dis:'Diseño',
            rec:'Recursos Humanos'

        }[empleados[i].departamento]
        
        lista.innerHTML += `
            <li class="list-item">
                <span>${empleados[i].nombre}</span>
                <span>${empleados[i].salario}</span>
                <span>${textoDepartamento}</span>
            </li>
        `
    }

})