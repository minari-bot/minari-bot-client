import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userInfo } from "../global/type";
import { auth } from "../apis/auth";
import { LOCAL_STORAGE_KEYS, queryKeys } from "../react-query/constants";
import { useEffect } from "react";

export const useUser = () =>  {
    const queryClient = useQueryClient();
    const { data : user, isError, refetch } = useQuery<userInfo>([queryKeys.user], auth.userInfo, {
        initialData: getStoredUser,
        retry: false,
        useErrorBoundary: false,
        // staleTime: 5000
    });
    useEffect(()=> {
        if(!user) clearStoredUser();
        else setStoredUser(user);
    }, [user]);
    useEffect(() => {
        if(isError) {
            queryClient.setQueryData([queryKeys.user], null);
            clearStoredUser();
        }
    }, [isError, queryClient]);

    // const updateUser = (newUser: userInfo) => {
    //     queryClient.setQueryData([queryKeys.user], newUser);
    // }
    // const clearUser = () => {
    //     queryClient.removeQueries([queryKeys.user]);
    // }
    return { user: user ?? null, refetch };
}
export const getStoredUser = (): userInfo | undefined => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY);
    return storedUser? JSON.parse(storedUser) : undefined;
}
export const clearStoredUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY);
}   
export const setStoredUser = (received : userInfo) => {
    const storedUser = JSON.stringify(received);
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY, storedUser);
}