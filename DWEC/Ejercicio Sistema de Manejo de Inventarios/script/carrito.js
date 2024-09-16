const carrito = {
    productos: [],

    // Agregar productos al carrito
    agregar_productos: function(id, nombre, precio, cantidad) {
        const producto_existe = this.productos.find(producto => producto.id === id);

        if (producto_existe) {
            producto_existe.cantidad += cantidad;
        } else {
            this.productos.push({ id, nombre, precio, cantidad });
        }
    },

    // Eliminar productos del carrito
    eliminar_productos: function(id, cantidad) {
        const producto_existe = this.productos.find(producto => producto.id === id);

        if (producto_existe) {
            producto_existe.cantidad -= cantidad;

            // Si la cantidad es 0 o menos, eliminamos el producto del carrito
            if (producto_existe.cantidad <= 0) {
                this.productos = this.productos.filter(producto => producto.id !== id);
            }
        } else {
            console.log("ERROR: no está ese producto en el carrito.");
        }
    },

    // Total carrito
    obtener_total: function() {
        return this.productos.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0);
    },

    // Vaciar el carrito
    vaciar_carrito: function() {
        this.productos = [];
    }
};