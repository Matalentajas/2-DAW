const productos = [
    { id: 1, nombre: 'Botella de Agua Reutilizable "EcoFlow"', stock: 100 },
    { id: 2, nombre: 'Auriculares Inalámbricos "SoundVibe"', stock: 50 },
    { id: 3, nombre: 'Cargador Solar Portátil "SunCharge"', stock: 75 },
    { id: 4, nombre: 'Mochila Antirrobo "SafeGuard"', stock: 60 },
    { id: 5, nombre: 'Reloj Inteligente "PikaLife"', stock: 40 },
    { id: 6, nombre: 'Difusor de Aromaterapia "ZenMist"', stock: 150 },
    { id: 7, nombre: 'Lámpara LED "GlowLite"', stock: 200 },
    { id: 8, nombre: 'Kit de Herramientas Multiusos "ToolMaster"', stock: 90 },
    { id: 9, nombre: 'Cojín Ergonomico para Silla "ComfortSeat"', stock: 120 }
];

function actualizarStock() {
    const producto_cambiar = Number(prompt("Inserta el id del producto que desees actualizar el stock"));
    const operacion_realizar = prompt("¿Desea Añadir o Quitar Stock?").toLowerCase();
    
    if (operacion_realizar === "añadir" || operacion_realizar === "quitar") {
        let cantidad = Number(prompt(`¿Cuánto stock deseas ${operacion_realizar}?`));

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida.");
            return;
        }

        for (let i = 0; i < productos.length; i++) {
            if (producto_cambiar === productos[i].id) {
                if (operacion_realizar === "añadir") {
                    productos[i].stock += cantidad;
                } else if (operacion_realizar === "quitar") {
                    productos[i].stock -= cantidad;
                }
                console.log(productos[i]);


                /* Seleccionar el elemento de stock correspondiente basándonos en el ID del producto. */
                const stock = document.getElementById(`stock${productos[i].id}`);
                if (stock) {
                    stock.innerHTML = `Stock: ${productos[i].stock}`;
                } else {
                    console.log(`Elemento con ID stock${productos[i].id} no encontrado.`);
                }
                break;
            }
        }
    } else {
        alert("Operación no reconocida. Usa 'añadir' o 'quitar'.");
    }
}

document.getElementById('actualizar').addEventListener('click', actualizarStock);






  