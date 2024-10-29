let caja_1 = document.getElementById("caja_1")
let caja_2 = document.getElementById("caja_2")

let boton = document.getElementById("buscar")

let GetData = async () => {
    const endopint = "https://dragonball-api.com/api/characters?limit=58"
    let datos = await fetch(endopint)
    let personaje = await datos.json()
    return personaje.items    
}

let showAll = async () => {
    let luchadores = document.getElementById("luchadores")
    let lista_personajes = await GetData()

    for (let i = 0; i < 10; i++) {
        let aleat = Math.floor(Math.random() * lista_personajes.length);
        let luchadoresHTML = `
            <div class="card">
                <img src="${lista_personajes[aleat].image}" alt="${lista_personajes[aleat].name}">
                <div>
                    <h2>${lista_personajes[aleat].name}</h2>
                    <p>Ki: ${lista_personajes[aleat].ki}</p>
                    <p>Género: ${lista_personajes[aleat].gender}</p>
                </div>
            </div>
        `
        if (i < 5) {
            caja_1.innerHTML += luchadoresHTML;
        } else {
            caja_2.innerHTML += luchadoresHTML;
        }
    }
}

let filter = async () => {
    let input_hombre = document.getElementById("hombre")
    let input_mujer = document.getElementById("mujer")

    let lista_personajes = await GetData()

    input_hombre.addEventListener("click", () => {
        caja_1.innerHTML = '';
        caja_2.innerHTML = '';

        let gene = "Male"
        let personajes_hombres = lista_personajes.filter(p => p.gender === gene);
        mostrarPersonajes(personajes_hombres);
    })

    input_mujer.addEventListener("click", () => {
        caja_1.innerHTML = '';
        caja_2.innerHTML = '';

        let gene = "Female"
        let personajes_mujeres = lista_personajes.filter(p => p.gender === gene);
        console.log(personajes_mujeres);
        
        mostrarPersonajes(personajes_mujeres);
    })
}

let mostrarPersonajes = (personajes) => {
    personajes.forEach((personaje, index) => {
        for (let i = 0; i < 1; i++) {
            let luchadoresHTML = `
                <div class="card_filter">
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <div>
                        <h2>${personaje.name}</h2>
                        <p>Ki: ${personaje.ki}</p>
                        <p>Género: ${personaje.gender}</p>
                    </div>
                </div>
            `
            if (i < 5) {
                caja_1.innerHTML += luchadoresHTML;
            } else {
                caja_2.innerHTML += luchadoresHTML;
            }
    }
    });
}

showAll();

boton.addEventListener("click", () => {
    filter();
})




