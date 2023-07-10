import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopiContext } from "../../Context/Global";

export function NavBar() {
    const { carrito, cuenta, validado, cerrraSesion } =
        useContext(ShopiContext);
    const navegador = useNavigate();
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    }

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between w-full items-center bg-white fixed z-10 top-0 py-5 px-4 text-sm">
            <ul className="flex items-center gap-5 ">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Todos
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Ropa
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electrodomesticos
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="furniture"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Muebles
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="shoes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Zapatillas
                    </NavLink>
                </li>
                <li className="hidden lg:block">
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
                {validado && (
                    <li className="text-black/60 hidden lg:block">
                        {cuenta.email}
                    </li>
                )}
                <li className="hidden lg:block">
                    <NavLink
                        to="my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mis ordenes
                    </NavLink>
                </li>
                <li className="hidden lg:block">
                    <NavLink
                        to="my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mi cuenta
                    </NavLink>
                </li>
                {validado ? (
                    <li className="hidden lg:block">
                        <span
                            onClick={() => {
                                cerrraSesion();
                                navegador("/sign-in");
                            }}
                        >
                            Cerrar Sesión
                        </span>
                    </li>
                ) : (
                    <li className="hidden lg:block">
                        <NavLink
                            to="sign-in"
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li>
                )}
                <li className="" onClick={() => toggleMenu()}>
                    <Bars3Icon className="w-6 h-6 text-black mr-2 lg:hidden" />
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 text-black mr-2" /> (
                    {carrito.length})
                </li>
            </ul>
            <ul
                className={`menu_mobil bg-white ${
                    menu ? "fixed" : "hidden"
                } w-full top-16 mt-1 right-0 p-4 flex flex-col gap-4 shadow-lg`}
            >
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electrodomesticos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="furniture"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="shoes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Zapatillas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Otros
                    </NavLink>
                </li>
                {validado && (
                    <li className="text-black/60 hidden lg:block">
                        {cuenta.email}
                    </li>
                )}
                <li>
                    <NavLink
                        to="my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mis ordenes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Mi cuenta
                    </NavLink>
                </li>
                {validado ? (
                    <li>
                        <span
                            onClick={() => {
                                cerrraSesion();
                                navegador("/sign-in");
                            }}
                        >
                            Cerrar Sesión
                        </span>
                    </li>
                ) : (
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
                )}
            </ul>
        </nav>
    );
}
