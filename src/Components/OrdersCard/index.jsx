import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function OrdersCard({ datos, indice }) {
    OrdersCard.propTypes = {
        datos: PropTypes.object.isRequired,
        indice: PropTypes.number.isRequired,
    };
    const { fecha, cantidad_productos, total } = datos;

    return (
        <Link
            to={`/my-order/${indice}`}
            className="flex justify-between items-center w-80 border border-black-1 p-4 rounded-lg"
        >
            <p className="flex flex-col items-center">
                <span className="font-bold">{fecha}</span>
                <span className="font-light">
                    {cantidad_productos} articulo(s)
                </span>
            </p>
            <p className="flex gap-4">
                <span className="font-light">$ {total}</span>
                <span>
                    <ChevronRightIcon className="h-6 w-6 text-black" />
                </span>
            </p>
        </Link>
    );
}
