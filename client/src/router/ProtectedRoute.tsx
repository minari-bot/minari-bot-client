import { Navigate, Outlet, redirect} from "react-router-dom";
import { getStoredUser, useUser } from "../hooks/useUser";

export const ProtectedRoute = () => {
    const user = getStoredUser();
    if(!user) return redirect('/auth/signIn');
    else return null 

    // const { user } = useUser();
    // if(!user) return redirect("/auth/signIn")
    // else return null;
}