import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { getProductos } from "../../Components/Services/productos.services";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
    const [productos, setProductos] = useState();

    useEffect(() => {
        getProductos(setProductos);
    }, []);

    return (
        <Layout>
            <div className="grid grid-cols-4 gap-8">
                {productos?.map((producto, indice) => {
                    return <Card key={indice} datos={producto} />;
                })}
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;
