import { QueryObserverResult, RefetchOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { userInfo } from "../../global/type";
import { auth } from "../../apis/auth";
import { queryKeys } from "../../react-query/constants";
import { useEffect } from "react";
import {
    clearStoredUser,
    getStoredUser,
    setStoredUser,
  } from '../user-storage'
interface UseUser {
    user: userInfo | null;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>;
    updateUser: (user: userInfo) => void;
    clearUser: () => void;
  }
export function useUser() : UseUser{
    const queryClient = useQueryClient();
    //@ts-ignore
    const { data : user, isError, refetch } = useQuery({
        initialData: getStoredUser,
        queryKey: [queryKeys.user],
        //@ts-ignore
        queryFn: () => auth.userInfo(user),
    });

    useEffect(() => {
        if(isError) clearUser();
    }, [isError]);

    useEffect(()=> {
        if(!user) clearStoredUser();
        else setStoredUser(user);
    }, [user]);
    
    function updateUser(newUser: userInfo): void {
        queryClient.setQueryData([queryKeys.user], newUser);
    }
    
    function clearUser() {
        queryClient.setQueryData([queryKeys.user], null);
    }
    return { user, refetch, updateUser, clearUser };
}
