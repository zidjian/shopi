import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopiContext } from "../../Context";

export function NavBar() {
    const {carrito} = useContext(ShopiContext)

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between w-full items-center bg-white fixed z-10 top-0 py-5 px-4 text-sm">
            <ul className="flex items-center gap-5 ">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Todos
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Ropa
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electrodomesticos
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="furniture"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Muebles
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="shoes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Zapatillas
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-5 ">
                <li className="text-black/60">waldirmaidana@gmail.com</li>
                <li className="">
                    <NavLink
                        to="my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mis ordenes
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mi cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Iniciar Sesión
                    </NavLink>
                </li>
                <li className="flex items-center"><ShoppingCartIcon className="w-6 h-6 text-black mr-2" /> ({carrito.length})</li>
            </ul>
        </nav>
    );
}
