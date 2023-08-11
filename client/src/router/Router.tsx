import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Auth from "../screens/Auth";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import { AdminProtectedRoute, ProtectedRoute } from "./ProtectedRoute";
import Api from "../screens/Api";
import Strategy from "../screens/Strategy";
import AdminStrategy from "../screens/AdminStrategy";

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
                path: "",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard/>,
                        // loader: ProtectedRoute,
                    },
                    {
                        path: "setting/api",
                        element: <Api/>,
                        // loader: ProtectedRoute,  
                    },
                    {
                        path: "strategy",
                        element: <Strategy/>,
                        // loader: ProtectedRoute,  
                    },
                ]
            },
            {
                path: "admin",
                element: <AdminProtectedRoute/>,
                children: [
                    {
                        path: "strategy",
                        element: <AdminStrategy/>,
                    }

                ]
            }
        ]
    }
]);
export default router;