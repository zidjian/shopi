import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShopiContext } from "../../Context/Global";

function SignIn() {
    const { cuenta, estadoSesion, setValidado } = useContext(ShopiContext);
    const navegador = useNavigate();

    function login(e) {
        e.preventDefault();
        estadoSesion(true);
        setValidado(true);
        navegador("/");
    }

    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <h1 className="font-medium text-lg">Iniciar Sesión</h1>
            </div>
            <form
                onSubmit={(evento) => login(evento)}
                className="w-80 flex flex-col gap-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className="border border-black text-black py-2 px-4 rounded-lg leading-1"
                        id="email"
                        type="text"
                        placeholder="ejemplo@gmail.com"
                        value={cuenta.email}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contrasenia">Contraseña</label>
                    <input
                        className="border border-black text-black py-2 px-4 rounded-lg leading-1"
                        id="contrasenia"
                        type="password"
                        placeholder="********"
                        value={cuenta.contrasenia}
                    />
                </div>
                <button className="w-full py-2 bg-black text-white rounded-lg font-bold">
                    Ingresar
                </button>
                <Link className="text-sm w-full text-center underline underline-offset-4">
                    Olvidé mi contraseñá?
                </Link>
                <div className="w-full border"></div>
                <Link
                    to={"/sign-up"}
                    className="w-full py-2 bg-white text-black border border-black rounded-lg font-bold text-center"
                >
                    Registrarse
                </Link>
            </form>
        </Layout>
    );
}

export default SignIn;
