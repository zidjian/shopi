import { useContext } from "react";
import { ShopiContext } from "../../Context/Global";
import "./estilos.css";
import { XCircleIcon } from "@heroicons/react/24/solid";

export function ProductDetail() {
    const { estadoDellatesProducto, toggleDetallesProducto, producto } =
        useContext(ShopiContext);
    const { title, price, images = [], description } = producto;
    return (
        <aside
            className={`${
                estadoDellatesProducto ? "flex" : "hidden"
            } product-detail fixed flex-col top-0 right-0 col-span-1 bg-white rounded-lg p-6 border border-black`}
        >
            <div className="flex justify-between w-full leading-0 mb-4">
                <div>Detalles</div>
                <span onClick={() => toggleDetallesProducto()}>
                    <XCircleIcon className="h-6 w-6 text-black" />
                </span>
            </div>
            <figure>
                <img className="rounded-lg" src={images[0]} alt={title} />
            </figure>
            <div className="mt-4">
                <h1 className="font-bold text-lg">{title}</h1>
                <p>$ {price}</p>
                <p>{description}</p>
            </div>
        </aside>
    );
}
