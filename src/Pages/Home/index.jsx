import { useContext, useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShopiContext } from "../../Context";
import { useParams } from "react-router-dom";

function Home() {
    const { productos } = useContext(ShopiContext);
    const { category } = useParams();
    const [buscador, setBuscador] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    function filtrarProductosPor(tipo, productos, porTitutlo, porCategoria) {
        if (tipo === "titulo") {
            return productos?.filter((producto) =>
                producto.title.toLowerCase().includes(porTitutlo.toLowerCase())
            );
        }
        if (tipo === "categoria") {
            return productos?.filter((producto) =>
                producto.category.name
                    .toLowerCase()
                    .includes(porCategoria.toLowerCase())
            );
        }
        if (tipo === "ambos") {
            return productos?.filter(
                (producto) =>
                    producto.title
                        .toLowerCase()
                        .includes(porTitutlo.toLowerCase()) &&
                    producto.category.name
                        .toLowerCase()
                        .includes(porCategoria.toLowerCase())
            );
        }
        if (tipo === "") {
            return productos;
        }
    }

    useEffect(() => {
        setCategoria(category);
    }, [category])

    useEffect(() => {
        if (buscador && !categoria) {
            setProductosFiltrados(
                filtrarProductosPor("titulo", productos, buscador, categoria)
            );
        }
        if (!buscador && categoria) {
            setProductosFiltrados(
                filtrarProductosPor("categoria", productos, buscador, categoria)
            );
        }
        if (buscador && categoria) {
            setProductosFiltrados(
                filtrarProductosPor("ambos", productos, buscador, categoria)
            );
        }
        if (!buscador && !categoria) {
            setProductosFiltrados(
                filtrarProductosPor("", productos, buscador, categoria)
            );
        }
    }, [buscador, productos, categoria]);

    function vista() {
        if (productosFiltrados?.length > 0) {
            return productosFiltrados?.map((producto, indice) => {
                return <Card key={indice} datos={producto} />;
            });
        } else {
            return <>No existen coincidencias</>;
        }
    }


    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <h1 className="font-medium text-lg">Productos exclusivos</h1>
            </div>
            <input
                type="text"
                placeholder="Escribe aquí..."
                onChange={(evento) => setBuscador(evento.target.value)}
                className="font-light py-4 px-6 border border-black rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-8">{vista()}</div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;
