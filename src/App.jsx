import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import { NavBar } from "./Components/NavBar";
import { ShopiProvider } from "./Context/Global";
import { CheckOut } from "./Components/CheckOut";
import SignUp from "./Pages/SignUp";
import Auth from "./Context/Auth/Auth";

const AppRutas = () => {
    const rutas = useRoutes([
        {
            path: "/",
            element: (
                <Auth>
                    <Home />
                </Auth>
            ),
        },
        {
            path: "/:category",
            element: (
                <Auth>
                    <Home />
                </Auth>
            ),
        },
        {
            path: "/my-account",
            element: (
                <Auth>
                    <MyAccount />
                </Auth>
            ),
        },
        {
            path: "/my-order",
            element: (
                <Auth>
                    \<MyOrder />
                </Auth>
            ),
        },
        {
            path: "/my-order/:id",
            element: (
                <Auth>
                    <MyOrder />
                </Auth>
            ),
        },
        {
            path: "/my-orders",
            element: (
                <Auth>
                    <MyOrders />
                </Auth>
            ),
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
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
