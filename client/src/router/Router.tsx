import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Auth from "../screens/Auth";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import Api from "../screens/Api";
import Strategy from "../screens/Strategy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "auth/signin",
                element: <Auth/>
            },
            {
                path: "auth/signup",
                element: <Auth/>
            },
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard/>,
                    },
                    {
                        path: "setting/api",
                        element: <Api/>
                    },
                    {
                        path: "strategy",
                        element: <Strategy/>
                    },
                ]
            },
        ]
    }
]);
export default router;