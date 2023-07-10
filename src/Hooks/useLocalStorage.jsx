import { useEffect, useState } from "react";

export function useLocalStorage() {
    const [cuenta, setCuenta] = useState([]);

    function registro(info) {
        localStorage.setItem('cuenta', JSON.stringify(info));
        setCuenta(info);
    }

    function estadoSesion(info) {
        localStorage.setItem('estado_session', info);
    }

    function validarSesion() {
        return localStorage.getItem('estado_session');
    }

    useEffect(() => {
        try {
            const valoresLocalStorage = localStorage.getItem('cuenta');

            if(valoresLocalStorage) {
                setCuenta(JSON.parse(valoresLocalStorage));
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return {
        cuenta,
        registro,
        estadoSesion,
        validarSesion
    };
}



// import { useEffect, useState } from "react";

// export function useLocalStorage(nombreDB, valorInicial) {
//     const [tareas, setTareas] = useState(valorInicial);
//     const [cargando, setCargando] = useState(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         setTimeout(() => {
//             try {
//                 const valoresLocalStorage = localStorage.getItem(nombreDB);

//                 let parsedItem;

//                 if (!valoresLocalStorage) {
//                     localStorage.setItem(
//                         nombreDB,
//                         JSON.stringify(valorInicial)
//                     );
//                     parsedItem = valorInicial;
//                 } else {
//                     parsedItem = JSON.parse(valoresLocalStorage);
//                     setTareas(parsedItem);
//                 }

//                 setCargando(false);
//             } catch (error) {
//                 setCargando(false);
//                 setError(true);
//             }
//         }, 2000);
//     });

//     function guardarTarea(nuevaTarea) {
//         localStorage.setItem(nombreDB, JSON.stringify(nuevaTarea));
//         setTareas(nuevaTarea);
//     }

//     return {
//         tareas,
//         guardarTarea,
//         cargando,
//         error,
//     };
// }
