import PropTypes from "prop-types";

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopiContext } from "../Global";

export default function Auth({ children }) {
    Auth.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const navegador = useNavigate();
    const { cuenta, validarSesion } = useContext(ShopiContext);
    const ruta = useParams();

    useEffect(() => {
        const validacion = validarSesion();
        if (!cuenta || (validacion === 'false' || validacion === null)) {
            navegador("/sign-in");
        }
    }, [ruta]);
    return children;
}
