import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";

function SignUp() {
    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <h1 className="font-medium text-lg">Registrase</h1>
            </div>
            <div className="w-80 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        className="border border-black text-black py-2 px-4 rounded-lg leading-1"
                        id="name"
                        type="text"
                        placeholder="Agapito"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        className="border border-black text-black py-2 px-4 rounded-lg leading-1"
                        id="email"
                        type="text"
                        placeholder="ejemplo@gmail.com"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contrasenia">Contraseña</label>
                    <input
                        className="border border-black text-black py-2 px-4 rounded-lg leading-1"
                        id="contrasenia"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <button className="w-full py-2 bg-black text-white rounded-lg font-bold">
                    Registrase
                </button>
                <div className="w-full border"></div>
                <Link
                    to={"/sign-in"}
                    className="w-full py-2 bg-white text-black border border-black rounded-lg font-bold text-center"
                >
                    Iniciar sesión
                </Link>
            </div>
        </Layout>
    );
}

export default SignUp;
