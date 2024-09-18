export const productos = [
    {
        "id":0,
        "imagen":"https://aquazensbd.com/wp-content/uploads/2023/09/Pez-Betta.png",
        "nombre":"Pez Betta",
        "precio":15,
        "stock":60
    },
    {
        "id":1,
        "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9J1Y4dxIv66xifOwYntEO_g7YlAQSFJychQ&s",
        "nombre":"Pez Goldfish",
        "precio":5,
        "stock":20
    },
    {
        "id":2,
        "imagen":"https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/03/23/desde-el-amazonas-hasta-europa.jpeg",
        "nombre":"Pez Disco",
        "precio":60,
        "stock":5
    }
]

export let actualizarstock = (produto, nuevo_stock) =>{
    let prod = productos.find(p  => p.id == id)
    prod.stock = nuevo_stock
}