const pelis = [{
    id : 1,
    nombre : "Parque Jurasico",
    año : 1990
},{
    id : 2,
    nombre : "Velocipastor",
    año : 2005
},{
    id : 3,
    nombre : "No se me pillas",
    año : 2024
}]

console.log("Esto es el principio");

const getpeliculas = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout(() => {
            
            resolve(pelis)

        }, 2000);
    })
}

getpeliculas().then((datos) => console.log(datos));

