import { useContext } from "react";
import { ShopiContext } from "../../Context";
import "./estilos.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";

export function CheckOut() {
    const { estadoCarrito, toggleCarrito, carrito } = useContext(ShopiContext);
    // const { title, price, images = [], description } = carrito;
    return (
        <aside
            className={`${
                estadoCarrito ? "flex" : "hidden"
            } product-detail fixed flex-col top-0 right-0 col-span-1 bg-white rounded-lg p-6 border border-black`}
        >
            <div className="flex justify-between w-full leading-0 mb-4">
                <div>Carrito</div>
                <span onClick={() => toggleCarrito()}>
                    <XCircleIcon className="h-6 w-6 text-black" />
                </span>
            </div>
            <div className="flex flex-col gap-2">
                {carrito.map((producto, indice) => {
                    return <OrderCard key={indice} datos={producto} />;
                })}
            </div>
        </aside>
    );
}
