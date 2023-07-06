import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopiContext } from "../../Context";

export function Card({ datos }) {
    Card.propTypes = {
        datos: PropTypes.object.isRequired,
    };
    const {
        carritoContador,
        setCarritoContador,
        toggleDetallesProducto,
        setProducto,
        carrito,
        setCarrito,
        toggleCarrito,
    } = useContext(ShopiContext);
    const { id, title, price, images, category } = datos;

    function agregarCarrito(evento, datosProducto) {
        evento.stopPropagation();
        setCarrito([...carrito, datosProducto]);
        setCarritoContador(carritoContador + 1);
        toggleCarrito(true);
        toggleDetallesProducto(false);
    }

    function verificarProductoAgregado(id) {
        const estado =
            carrito.filter((producto) => producto.id === id).length > 0;
        if (estado) {
            return (
                <div className="absolute top-0 right-0 bg-black w-6 h-6 flex justify-center items-center rounded-full m-2">
                    <CheckIcon className="w-4 h-4 text-white" />

                </div>
            );
        } else {
            return (
                <div
                    onClick={(evento) => agregarCarrito(evento, datos)}
                    className="absolute top-0 right-0 bg-white w-6 h-6 flex justify-center items-center rounded-full m-2"
                >
                    <PlusIcon className="w-4 h-4 text-black" />
                </div>
            );
        }
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => {
                toggleDetallesProducto(true);
                toggleCarrito(false);
                setProducto(datos);
            }}
        >
            <figure className="relative w-full h-4/5 rounded-lg overflow-hidden">
                {verificarProductoAgregado(id)}
                <img
                    className="w-full h-full object-cover"
                    src={images[0]}
                    alt=""
                />
                <span className="absolute bottom-0 left-0 bg-white leading-1 py-1 px-4 rounded-lg m-2">
                    {category.name}
                </span>
            </figure>
            <p className="flex justify-between px-2 py-4">
                <span className="font-light">{title}</span>
                <span className="font-medium">{price}</span>
            </p>
        </div>
    );
}
