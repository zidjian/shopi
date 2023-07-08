import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";

function MyAccount() {
    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <h1 className="font-medium text-lg">Mi cuenta</h1>
            </div>
            <div className="w-80 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="font-light" htmlFor="name">Nombre completo</label>
                    <p>Waldir Maidana</p>
                </div>
                <div className="flex flex-col">
                    <label className="font-light" htmlFor="name">Correo electronico</label>
                    <p>waldirmaidana@gmail.com</p>
                </div>
                <Link
                    to={"/sign-in"}
                    className="w-full py-2 bg-black text-white border border-black rounded-lg font-bold text-center"
                >
                    Salir
                </Link>
            </div>
        </Layout>
    );
}

export default MyAccount;
