import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopiContext } from "../../Context";

export function NavBar() {
    const {carritoContador} = useContext(ShopiContext)

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
                        All
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="forniture"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Forniture
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others{" "}
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
                        My orders
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My account
                    </NavLink>
                </li>
                <li className="rounded-md bg-cyan-600 py-2 px-5 text-white">
                    <NavLink
                        to="sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center"><ShoppingCartIcon className="w-6 h-6 text-black mr-2" /> ({carritoContador})</li>
            </ul>
        </nav>
    );
}
