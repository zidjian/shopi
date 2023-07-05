import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShopiContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
    const {
        orden,
    } = useContext(ShopiContext);
    console.log(orden.slice(-1)[0])
    return (
        <Layout>
            Mi Orden
            <div className="flex flex-col gap-2">
                {orden.slice(-1)[0].productos.map((producto) => {
                    return <OrderCard key={producto.id} datos={producto} />;
                })}
            </div>
        </Layout>
    );
}

export default MyOrder;
