import { useContext } from "react";
import { ShopiContext } from "../../Context";
import "./estilos.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";
import { precioTotal } from "../../Utils";
import { Link } from "react-router-dom";

export function CheckOut() {
    const {
        estadoCarrito,
        toggleCarrito,
        carrito,
        setCarrito,
        orden,
        setOrden,
    } = useContext(ShopiContext);
    // const { title, price, images = [], description } = carrito;

    function manejadorCheckout() {
            const anadirOrden = {
                fecha: "04-07-2023",
                productos: carrito,
                cantidad_productos: carrito.length,
                total: precioTotal(carrito),
            };
            setOrden([...orden, anadirOrden]);
            setCarrito([]);
            toggleCarrito(false)
    }

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
            <div className="flex flex-col gap-2 overflow-y-scroll">
                {carrito.map((producto, indice) => {
                    return <OrderCard key={indice} datos={producto} />;
                })}
            </div>
            <p className="flex items-center justify-between border-t-2 mt-4 pt-4">
                <span className="font-light">Total</span>
                <span className="font-bold text-lg">
                    {precioTotal(carrito)}
                </span>
            </p>
            <Link
                to={"/my-order/last"}
                onClick={() => manejadorCheckout()}
                className=" bg-black text-white py-2 mt-4 w-full flex justify-center items-center rounded-lg"
            >
                CheckOut
            </Link>
        </aside>
    );
}
