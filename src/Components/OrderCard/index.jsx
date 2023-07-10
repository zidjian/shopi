import { TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopiContext } from "../../Context/Global";

export function OrderCard({ datos }) {
    const { carrito, setCarrito } =
        useContext(ShopiContext);
    OrderCard.propTypes = {
        datos: PropTypes.object.isRequired,
    };
    const { id, title, images = [], price } = datos;

    function eliminarDelCarrito(id) {
        const carrito_actualizado = carrito.filter(
            (producto) => producto.id !== id
        );
        setCarrito(carrito_actualizado);
    }

    return (
        <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
                <figure className="w-16 h-16">
                    <img
                        className="w-full h-full rounded-lg"
                        src={images[0]}
                        alt=""
                    />
                </figure>
                <p className="font-light">{title}</p>
            </div>
            <div className="flex gap-4">
                <p className="font-medium">{price}</p>

                <span>
                    <TrashIcon
                        onClick={() => eliminarDelCarrito(id)}
                        className="h-6 w-6 text-black"
                    />
                </span>
            </div>
        </div>
    );
}
