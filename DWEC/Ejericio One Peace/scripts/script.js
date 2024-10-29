let generar=(data)=>{
    let table=document.getElementById('table')
        table.innerHTML=""
        table.innerHTML+=`
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Fruta</th>
                <th>Trabajo</th>
                <th>Descripción</th>
            </tr>
        `
        for (let i = 0; i < 10; i++) {
            let num=Math.floor(Math.random()*data.length)
            
            let fruta=""
            let desc=""
            let age=""
            let job=""
            
            if (!data[num].fruit) {
                fruta="No tiene"
                desc="No tiene"
            }else{
                fruta=data[num].fruit.name
                desc=data[num].fruit.description
            }

            if (!data[num].age || data[num].age=="") {
                age="Desconocida"
            }else{
                age=data[num].age
            }

            if (!data[num].job || data[num].job=="") {
                job="Desconocido"
            }else{
                job=data[num].job
            }

            table.innerHTML+=`
                <tr>
                    <td class="nombre">${data[num].name} Estado:${data[num].status}</td>
                    <td class="edad">${age} </td>
                    <td class="fruta">${fruta}</td>
                    <td class="trabajo">${job}</td>
                    <td class="desc">${desc}</td>   
                </tr>
            `
            
        }
}

let generar_find=(personaje)=>{
    if (personaje) {
        let table=document.getElementById('table')
        if (!personaje.fruit) {
            fruta="No tiene"
            desc="No tiene"
        }else{
            fruta=personaje.fruit.name
            desc=personaje.fruit.description
        }
    
        if (!personaje.age || personaje.age=="") {
            age="Desconocida"
        }else{
            age=personaje.age
        }

        if (!personaje.job || personaje.job=="") {
            job="Desconocido"
        }else{
            job=personaje.job
        }
    
        table.innerHTML=""
        table.innerHTML+=`
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Fruta</th>
                <th>Trabajo</th>
                <th>Descripción</th>
            </tr>
        `
        table.innerHTML+=`
            <tr>
                <td class="nombre">${personaje.name} Estado:${personaje.status}</td>
                <td class="edad">${age}</td>
                <td class="fruta">${fruta}</td>
                <td class="trabajo">${job}</td>
                <td class="desc">${desc}</td>   
            </tr>
        ` 
    }else{
        table.innerHTML=""
        table.innerHTML+='<span>NO DISPONIBLE</span>'
    }
    
}


let getData=()=>{
    return fetch('https://api.api-onepiece.com/v2/characters/en')
    .then(res => {
        return res.json()
    })
    .catch(error=>{
        console.log(error);
    })
    .then(data=>{
        let vivos=document.getElementById('op1')
        let muertos=document.getElementById('op2')
        
        vivos.addEventListener('click',()=>{
            let estado="living"
            let personajes_vivos=data.filter(p=>p.status===estado)
            generar(personajes_vivos)
        })

        muertos.addEventListener('click',()=>{
            let estado="deceased"
            let personajes_muertos=data.filter(p=>p.status===estado)
            generar(personajes_muertos)
        })
       
        generar(data)

        document.getElementById('refrescar').addEventListener('click',()=>{
            generar(data)
            vivos.checked=false
            muertos.checked=false
        })

        document.getElementById('buscar').addEventListener('click',()=>{
            let nombre=document.getElementById('input_buscar').value
            if (vivos.checked) {
                let estado="living"
                let personajes_vivos=data.filter(p=>p.status===estado)
                let personaje=personajes_vivos.find(p=>p.name===nombre)
                generar_find(personaje)
            }else{
                if (muertos.checked) {
                    let estado="deceased"
                    let personajes_muertos=data.filter(p=>p.status===estado)
                    let personaje=personajes_muertos.find(p=>p.name===nombre)
                    generar_find(personaje)
                }else{
                    let personaje=data.find(p=>p.name===nombre)
                    generar_find(personaje)
                }
            }


            
            
        })  
    })
}
getData()

