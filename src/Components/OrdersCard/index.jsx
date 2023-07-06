import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function OrdersCard({ datos }) {
    OrdersCard.propTypes = {
        datos: PropTypes.object.isRequired,
    };
    const { fecha } = datos;

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <p className="font-light">{fecha}</p>
            </div>
            <div className="flex gap-4">
                <p className="font-medium">{fecha}</p>

                <span>
                    <ChevronRightIcon className="h-6 w-6 text-black" />
                </span>
            </div>
        </div>
    );
}
