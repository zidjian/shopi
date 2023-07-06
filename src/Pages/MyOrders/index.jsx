import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShopiContext } from "../../Context";
import { OrdersCard } from "../../Components/OrdersCard";

export function MyOrders() {
    const { orden } = useContext(ShopiContext);
    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                Mis Ordenes
            </div>

            <div className="flex flex-col gap-2">
                {orden.map((orden, indice) => {
                    return <OrdersCard key={indice} datos={orden} />;
                })}
            </div>
        </Layout>
    );
}
