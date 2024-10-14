const endpoint = "https://yesno.wtf/api"

let getanswer = async () =>{
    // await fetch(endpoint)
    // .then(res => res.json)
    // .then(datos => {
    //     console.log(datos);
    // })

    let respuesta = await fetch(endpoint)
    let datos = await respuesta.json()
    document.getElementById('box-answer').innerHTML = `
        <img src="${datos.image}">
    `
}

document.getElementById("boton").addEventListener('click', () => {

    let pregunta=document.getElementById("pregunta").value

    if (pregunta != "" && pregunta[pregunta.length-1] == "?" && pregunta[0] == "¿") {
        getanswer()
    }else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Tienes que poner una pregunta con sus respectivos -¿?-",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
})
    

