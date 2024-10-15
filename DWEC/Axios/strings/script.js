const endpoint = "https://rickandmortyapi.com/api/character";

const button = document.getElementById("button");

const linea_1 = document.getElementById("linea_1");
const linea_2 = document.getElementById("linea_2");

let getData = async () => {
    let personajes = await axios.get(endpoint);
    let lista_personajes = personajes.data.results;

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * lista_personajes.length);
        
        let personajeHTML = `
            <div class="contenedor">
                <img src="${lista_personajes[num].image}" alt="${lista_personajes[num].name}">
                <div class="contenedor_info">
                    <h2 id="nombre">${lista_personajes[num].name}</h2>
                    <p id="estado">${lista_personajes[num].status}</p>
                    <p class="no_imp">Last known location:</p>
                    <p id="lugar">${lista_personajes[num].location.name}</p>
                </div>
            </div>
        `;

        if (i < 3) {
            linea_1.innerHTML += personajeHTML;
        } else {
            linea_2.innerHTML += personajeHTML;
        }
    }
};

button.addEventListener("click", () => {
    linea_1.innerHTML = ""
    linea_2.innerHTML = ""
    getData();
})































