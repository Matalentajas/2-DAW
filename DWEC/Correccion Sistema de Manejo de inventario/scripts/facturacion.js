import { carrito, addprod } from "./carrito.js";
import { productos } from "./productos.js";


let cajaproductos = document.getElementById("productos")
for (let i = 0; i < productos.length; i++) {

    cajaproductos.innerHTML += `
        <div class = "producto">
            <div class="caja_imagen">
                <img src="${productos[i].imagen}">
            </div>
            <h2>${productos[i].nombre}</h2>
            <h3>${productos[i].precio}</h3>
            <h4>${productos[i].stock}</h4>
            <button id="producto_${productos[i].id}" >Añadir</button>
        </div>
    `
}