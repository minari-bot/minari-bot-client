import { Navigate, Outlet } from "react-router-dom";
import { getStoredUser, useUser } from "../hooks/useUser";

export const ProtectedRoute = () => {
    // const user = getStoredUser();
    // if(!user) return redirect('/auth/signIn');
    // else return null 
    const { user } = useUser();
    if(!user) return <Navigate to={'/auth/signIn'}/>
    else return <Outlet/>
}
export const AdminProtectedRoute = () => {
    const { user } = useUser();
    if(user?.userType !== 'ADMIN') return <Navigate to={'/'}/>
    else return <Outlet/>
}