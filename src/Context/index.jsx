import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ShopiContext = createContext();

export function ShopiProvider({ children }) {
    ShopiProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [carritoContador, setCarritoContador] = useState(0);
    const [estadoDellatesProducto, setEstadoDellatesProducto] = useState(false);
    const [producto, setProducto] = useState({});
    const [carrito, setCarrito] = useState([]);
    const [estadoCarrito, setEstadoCarrito] = useState(false);


    function toggleDetallesProducto(estado) {
        if(estado) {
            setEstadoDellatesProducto(true);
            return;
        }
        if(!estado) {
            setEstadoDellatesProducto(false);
            return;
        }
        setEstadoDellatesProducto(!estadoDellatesProducto);
    }

    function toggleCarrito(estado) {
        if(estado) {
            setEstadoCarrito(true);
            return;
        }
        if(!estado) {
            setEstadoCarrito(false);
            return;
        }
        setEstadoCarrito(!estadoCarrito);
    }

    return (
        <ShopiContext.Provider
            value={{
                carritoContador,
                setCarritoContador,
                toggleDetallesProducto,
                estadoDellatesProducto,
                producto,
                setProducto,
                carrito,
                setCarrito,
                estadoCarrito,
                toggleCarrito
            }}
        >
            {children}
        </ShopiContext.Provider>
    );
}
