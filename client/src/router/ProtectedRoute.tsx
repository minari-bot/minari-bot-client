import { Navigate, Outlet} from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const ProtectedRoute = () => {
    // const user = useUser();
    // if(!user) return  <Navigate to="/auth/signIn" />;
    // else return <Outlet/>
    return <Outlet/>
}