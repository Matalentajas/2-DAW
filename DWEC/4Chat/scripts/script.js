const respuesta = [
    "Si",
    "No",
    "La tuya",
    "Joder",
    "Vete a cagar",
    "Me gusta el melocoton",
    "Mi gato es socialista",
    "Vale",
    "No me hables"
]
let txt = document.getElementById("txt")
let main = document.getElementById("main")
let tiempos = [2000,3000,9000,7000]


let generarrespuesta = () =>{

    let tiempo = Math.floor(Math.random() * tiempos.length)
    main.innerHTML +=`
    <div class="msg1">
        <p>
            ${txt.value}
        </p>
    </div>
`
    setTimeout(() => {
        let al = Math.floor(Math.random() * respuesta.length)
        main.innerHTML +=`
            <div class="msg2">
                <p>
                    ${respuesta[al]}
                </p>
            </div>
        `
        console.log(respuesta[al]);
    }, tiempos[tiempo]);
}

document.getElementById("Enviar").addEventListener("click", () =>{

    generarrespuesta()

})


