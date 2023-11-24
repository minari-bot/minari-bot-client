import { Navigate, Outlet } from "react-router-dom";
import {  useUser } from "../components/hooks/useUser";
import { useEffect } from "react";

export const ProtectedRoute = () => {
    const { user, refetch } = useUser();
    if(!user) return <Navigate to={'/auth/signIn'}/>
    else return <Outlet/>
}
export const AdminProtectedRoute = () => {
    const { user } = useUser();
    if(user?.userType !== 'ADMIN') return <Navigate to={'/'}/>
    else return <Outlet/>
}