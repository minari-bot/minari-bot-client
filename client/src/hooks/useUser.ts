import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userInfo } from "../global/type";
import { auth } from "../apis/auth";
import { LOCAL_STORAGE_KEYS, queryKeys } from "../react-query/constants";
import { useEffect } from "react";
interface UseUser {
    user: userInfo | null;
    updateUser: (user: userInfo) => void;
    clearUser: () => void;
  }
export function useUser() : UseUser{
    const queryClient = useQueryClient();
    // @ts-ignore
    const { data : user } = useQuery([queryKeys.user], () => auth.userInfo(user), {
        initialData: getStoredUser,
        useErrorBoundary: false,
    });
    useEffect(()=> {
        if(!user) clearStoredUser();
        else setStoredUser(user);
    }, [user]);

    // useEffect(() => {
    //     if(isError) {
    //         queryClient.setQueryData([queryKeys.user], null);
    //         clearStoredUser();
    //     }
    // }, [isError, queryClient]);
    
    function updateUser(newUser: userInfo): void {
        queryClient.setQueryData([queryKeys.user], newUser);
    }
    
    function clearUser() {
        queryClient.setQueryData([queryKeys.user], null);
        if(!user) clearStoredUser();
        else setStoredUser(user);
    }
    return { user, updateUser, clearUser };
}
export const getStoredUser = (): userInfo | null => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY);
    return storedUser? JSON.parse(storedUser) : null;
}
export const clearStoredUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY);
}   
export const setStoredUser = (received : userInfo) => {
    const storedUser = JSON.stringify(received);
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY, storedUser);
}