import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../hooks/useUser";
import { auth } from "../../../apis/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../../react-query/constants";

export function useAuth() {
    const { updateUser, clearUser } = useUser();
    const navigate = useNavigate();
    const setToast = useToast();

    const { mutateAsync : signIn} = useMutation({
        mutationFn : auth.signIn,
        onSuccess: (data) => {
            updateUser(data);
        } 
    });
    const { mutateAsync : signOut } = useMutation({
        mutationFn: auth.signOut,
        onSuccess: () => {
            clearUser();
            setToast({state: "success", text: MUTATE_SUCCESS_MESSAGE.SIGN_OUT})
            navigate('/');
        },
        onError: () => {
            clearUser();
            setToast({state: "success", text: MUTATE_SUCCESS_MESSAGE.SIGN_OUT})
        }
    });
    const { mutateAsync : signUp } = useMutation({
        mutationFn: auth.signUp,
        onSuccess: (data) => {
            updateUser(data);
        }
    });
    return { signIn, signUp, signOut };
}