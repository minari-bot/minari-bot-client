import { userInfo } from "../../global/type";

const USER_LOCAL_STORAGE_KEY = 'loggedUser'
export const getStoredUser = (): userInfo | null => {
    const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    return storedUser? JSON.parse(storedUser) : null; 
}
export const clearStoredUser = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}   
export const setStoredUser = (received : userInfo) => {
    const storedUser = JSON.stringify(received);
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, storedUser);
}