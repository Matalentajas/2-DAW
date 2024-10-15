const endpoint = "https://rickandmortyapi.com/api/character";

const boton = document.getElementById("boton")

let cajon_1 = document.getElementById("cajon_1")
let cajon_2 = document.getElementById("cajon_2")
let cajon_3 = document.getElementById("cajon_3")


let get_Data = async () => {

    let personajes = await axios.get(endpoint);
    let lista_personajes = personajes.data.results;
    
    for (let i = 0; i < 6; i++) {
        let num_person = Math.floor(Math.random() * lista_personajes.length);
        let num_page = Math.floor(Math.random() * lista_personajes.length);
        let personajeHTML = `
        <div class="contenedor_personajes">
            <img src="${lista_personajes[num_person].image}" alt="${lista_personajes[num_person].name}" >
            <div id="texto">
                <h3 class="content"> ${lista_personajes[num_person].name}</h3>
                <p class="content">${lista_personajes[num_person].status}</p>
                <p class="content"> Last known location:</p>
                <p class="content"> ${lista_personajes[num_person].location.name}</p>
            </div>
        </div>
        `;

        if (i < 3) {
            cajon_1.innerHTML += personajeHTML;
        } else {
            cajon_2.innerHTML += personajeHTML;
        }
        
    }

    let personajeHTML_boton = `
    <button id="boton">No pulsar</button>
    `;

    // Preguntar Fortu
    cajon_3.innerHTML += personajeHTML_boton;
};

let pantalla_carga = async()=>{
    document.getElementById("contenido").style.display = "none"
    document.getElementById("image-box").style.display = "flex"   

    await setTimeout(()=>{
        document.getElementById("image-box").style.display = "none"
        document.getElementById("contenido").style.display = "flex"     
        displayUsers(users)
    },2000)
}

boton.addEventListener("click", () => {
    const header = document.getElementById("header")
    header.innerHTML = ""
    cajon_1.innerHTML = ""    
    cajon_2.innerHTML = "" 
    pantalla_carga()   
    get_Data()
    

});
