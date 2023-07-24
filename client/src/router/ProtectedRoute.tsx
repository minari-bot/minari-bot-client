import { Navigate, Outlet} from "react-router-dom";
import { getStoredUser, useUser } from "../hooks/useUser";
import { LOCAL_STORAGE_KEYS } from "../react-query/constants";
import { useIsFetching } from "@tanstack/react-query";

export const ProtectedRoute = () => {
    const user = useUser();
    if(user.isFetching) return <></>
    else if(Object.keys(user.user).length === 0 && user.user.constructor === Object) return <Navigate to="/auth/signIn"/>
    else return <Outlet/>;
}