import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Auth from "../screens/Auth";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import Api from "../screens/Api";

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
                path: "auth/signIn",
                element: <Auth/>
            },
            {
                path: "auth/signUp",
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
                    }
                ]
            },
        ]
    }
]);
export default router;