import { Navigate, Outlet} from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const ProtectedRoute = () => {
    const user = useUser();
    if(!user.user) return <Navigate to="/auth/signIn"/>
    else return <Outlet/>;
}