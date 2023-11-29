import { Navigate, Outlet } from "react-router-dom";
import {  useUser } from "../components/hooks/useUser";

export const ProtectedRoute = () => {
    const { user } = useUser();
    if(!user) return <Navigate to={'/auth/signIn'}/>
    else return <Outlet/>
}
export const AdminProtectedRoute = () => {
    const { user } = useUser();
    if(user?.userType !== 'ADMIN') return <Navigate to={'/'}/>
    else return <Outlet/>
}