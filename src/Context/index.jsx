import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getProductos } from "../Components/Services/productos.services";

export const ShopiContext = createContext();

export function ShopiProvider({ children }) {
    ShopiProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [productos, setProductos] = useState();

    useEffect(() => {
        getProductos(setProductos);
    }, []);

    const [estadoDellatesProducto, setEstadoDellatesProducto] = useState(false);
    const [producto, setProducto] = useState({});
    const [carrito, setCarrito] = useState([]);
    const [estadoCarrito, setEstadoCarrito] = useState(false);
    const [orden, setOrden] = useState([]);

    function toggleDetallesProducto(estado) {
        if (estado) {
            setEstadoDellatesProducto(true);
            return;
        }
        if (!estado) {
            setEstadoDellatesProducto(false);
            return;
        }
        setEstadoDellatesProducto(!estadoDellatesProducto);
    }

    function toggleCarrito(estado) {
        if (estado) {
            setEstadoCarrito(true);
            return;
        }
        if (!estado) {
            setEstadoCarrito(false);
            return;
        }
        setEstadoCarrito(!estadoCarrito);
    }

    return (
        <ShopiContext.Provider
            value={{
                toggleDetallesProducto,
                estadoDellatesProducto,
                producto,
                setProducto,
                carrito,
                setCarrito,
                estadoCarrito,
                toggleCarrito,
                orden,
                setOrden,
                productos,
            }}
        >
            {children}
        </ShopiContext.Provider>
    );
}
