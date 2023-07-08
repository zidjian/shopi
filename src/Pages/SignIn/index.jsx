import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";

function SignIn() {
    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <h1 className="font-medium text-lg">Iniciar Sesión</h1>
            </div>
            <div className="w-80 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input className="border border-black text-black py-2 px-4 rounded-lg leading-1" id="email" type="text" placeholder="ejemplo@gmail.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contrasenia">Contraseña</label>
                    <input className="border border-black text-black py-2 px-4 rounded-lg leading-1" id="contrasenia" type="password" placeholder="********" />
                </div>
                <button className="w-full py-2 bg-black text-white rounded-lg font-bold">Ingresar</button>
                <Link className="text-sm w-full text-center underline underline-offset-4">Olvidé mi contraseñá?</Link>
                <Link to={'/sign-up'} className="w-full py-2 bg-white text-black border border-black rounded-lg font-bold text-center">Registrarse</Link>
            </div>
        </Layout>
    );
}

export default SignIn;
