const users=[
    {
        img:"https://thispersondoesnotexist.com/",
        name:"User 1",
        age:200,
        country:"Poland"
    },
    {
        img:"https://thispersondoesnotexist.com/",
        name:"User 1",
        age:35,
        country:"Spain"
    },
    {
        img:"https://thispersondoesnotexist.com/",
        name:"User 1",
        age:43,
        country:"EEUU"
    }
]


let displayUsers=(users)=>{
    let div_users=document.getElementById('users')
    users.forEach(u => {
        div_users.innerHTML+=`
            <div class="box-user">
                <img src="${u.img}" alt="User Image">
                <div id="info">
                    <h1>${u.name}</h1>
                    <h2>${u.age}</h2>
                    <h3>${u.country}</h3>
                </div>
                
            </div>
        `
    });
}

//displayUsers(users) funcion sincrona

let loadUsers = async()=>{
    let time = parseInt(prompt("Escribe el tiempo en milisegundos."))
    alert("Los datos estan cargando...")
    console.log(typeof(time));
    

    await setTimeout(()=>{   
        document.getElementById("image-box").style.display = "none"     
        displayUsers(users)
        alert("Usuarios mostrados con éxito.")
    },time)
}

loadUsers()

