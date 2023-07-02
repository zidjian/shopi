import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import { NavBar } from "./Components/NavBar";

const AppRutas = () => {
    const rutas = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/my-account",
            element: <MyAccount />,
        },
        {
            path: "/my-order",
            element: <MyOrder />,
        },
        {
            path: "/my-orders",
            element: <MyOrders />,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
    return rutas;
};

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <AppRutas />
            </BrowserRouter>
        </>
    );
}

export default App;
