import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userInfo } from "../global/type";
import { auth } from "../apis/auth";
import { LOCAL_STORAGE_KEYS, queryKeys } from "../react-query/constants";

export const useUser = () =>  {
    const queryClient = useQueryClient();
    const { data : user = {} } = useQuery<userInfo>([queryKeys.user] , auth.userInfo, {
        onSuccess: (received: userInfo | null) => {
            if (!received) { // falsy의 값을 받을 경우
                clearStoredUser();
            } else { // truthy의 값을 받을 경우
                setStoredUser(received);
            }
        },
        retry: false,
    });
    const updateUser = (newUser: userInfo) => {
        queryClient.setQueryData([queryKeys.user], newUser);
    }
    const clearUser = () => {
        queryClient.removeQueries([queryKeys.user]);
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