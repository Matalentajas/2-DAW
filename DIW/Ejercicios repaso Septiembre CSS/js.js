const boton = document.getElementById("boton");
let ocultar = 0
boton.addEventListener("click", () => {

    if (ocultar == 0) {
      
        for (let i = 0; i < document.querySelectorAll(".li").length; i++) {
            
            document.querySelectorAll(".li")[i].style.display="flex"

        }  

        ocultar = 1
    } else if(ocultar == 1){
        for (let i = 0; i < document.querySelectorAll(".li").length; i++) {
            
            document.querySelectorAll(".li")[i].style.display="none"

        } 

        ocultar = 0
    }


  });
  