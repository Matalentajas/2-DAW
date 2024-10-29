// Boton
let boton_nombre = document.getElementById("boton_nombre")
// Fin boton
//Inputs HTML
const loading = document.getElementById("loading")
const edad_box = document.getElementById("edad_box")
const sexo_box = document.getElementById("sexo_box")
const nacionalidad_box = document.getElementById("nacionalidad_box")
// Fin Inputs HTML


let GetData = async (nombre) => {
    // Defino la URL con el nombre que ponga el cliente.
    let edad_url = `https://api.agify.io?name=${nombre}`;
    let genero_url = `https://api.genderize.io?name=${nombre}`;
    let nacionalidad_url = `https://api.nationalize.io?name=${nombre}`;

    try {
        //Hacemos la animacion de carga
        loading.style.display = "flex"

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Con Axios hago un get a la api.
        let edad = await axios.get(edad_url);
        let genero = await axios.get(genero_url);
        let nacionalidad = await axios.get(nacionalidad_url);

        // Extraer el valor específico de la respuesta
        let edadValue = edad.data.age;
        let generoValue = genero.data.gender;
        let nacionalidadValue = nacionalidad.data.country[0].country_id;

        console.log(edadValue);
        console.log(generoValue);
        console.log(nacionalidadValue);

        mostrarData(edadValue, generoValue, nacionalidadValue, nombre);

    // En caso de superar el numero limite de peticiones mostramos este error por pantalla
    } catch (error) {
        if (error.response && error.response.status === 429) {
            alert("Has alcanzado el límite de solicitudes a la API. Inténtalo de nuevo más tarde.");
        } else {
            console.error("Error en la solicitud:", error);
            alert("Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.");
        }
    }

    //Vamos a ocultar la animacion de carga.
    
    finally {
        loading.style.display = "none"; 
    }

};

// Funcion que muestre los resultados
let mostrarData = (edadValue, generoValue, nacionalidadValue, nombre) => {
    edad_box.innerHTML = `${nombre} tiene ${edadValue} años.`;
    sexo_box.innerHTML = `${nombre} es ${generoValue}.`;
    nacionalidad_box.innerHTML = `${nombre} es de ${nacionalidadValue}.`;
};
// Funcion de ejecución de boton
boton_nombre.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;

    GetData(nombre);
});