import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import { NavBar } from "./Components/NavBar";
import { ShopiProvider } from "./Context";
import { CheckOut } from "./Components/CheckOut";

const AppRutas = () => {
    const rutas = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/:category",
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
            path: "/my-order/:id",
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
        <ShopiProvider>
            <BrowserRouter>
                <NavBar />
                <AppRutas />
                <CheckOut />
            </BrowserRouter>
        </ShopiProvider>
    );
}

export default App;
