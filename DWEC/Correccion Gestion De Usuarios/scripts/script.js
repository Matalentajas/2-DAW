const empleados = []
let botonenviar = document.getElementById("enviar")
let lista = document.getElementById("lista_em")

document.getElementById("msg").innerHTML = "No hay datos"

botonenviar.addEventListener("click", () => {
    let nombre = document.getElementById("nom").value
    let salario = document.getElementById("sal").value
    let departamento = document.getElementById("dep").value
    console.log(nombre, salario, departamento);
    empleados.push(
        {
            "nombre" : nombre,
            "salario" : salario,
            "departamento" : departamento
        }
    )
    nombre.value = ""
    salario.valuer = ""
    departamento.value = null

    document.getElementById
    document.getElementById("msg").style.display = "none"

    lista.innerHTML = ""

    for (let i = 0; i < empleados.length; i++) {

        lista.innerHTML += `
            <li class="list-item">
                <span>${empleados[i].nombre}</span>
                <span>${empleados[i].salario}</span>
                <span>${empleados[i].departamento}</span>

            </li>
        `
    }
    
})