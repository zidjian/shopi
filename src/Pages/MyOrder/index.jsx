import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShopiContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
    const { orden } = useContext(ShopiContext);
    let {id} = useParams();
    if(id === "last") {
        id = orden.length - 1;
        console.log(id)
    }
    return (
        <Layout>
            <div className="relative flex justify-center w-80 pb-4">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="w-6 h-6 text-black" />
                </Link>
                Mi Orden
            </div>
            <div className="flex flex-col gap-2">
                {orden[id]?.productos?.map((producto) => {
                    return <OrderCard key={producto.id} datos={producto} />;
                })}
            </div>
        </Layout>
    );
}

export default MyOrder;
