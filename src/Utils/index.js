export function precioTotal(carrito) {
    let total = 0;
    carrito.map((producto) => (total += producto.price));
    return total;
}
