import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MUTATE_SUCCESS_MESSAGE } from "../../../react-query/constants";
import { useToast } from "../../../atoms/toast";
import { auth } from "../../../apis/auth";
import { useUser } from "../../hooks/useUser";

export default function useSignOut(){
    const setToast = useToast();
    const navigate = useNavigate();
    const { clearUser } = useUser();

    const { mutateAsync } = useMutation({
        mutationFn: auth.signOut,
        onSuccess: () => {
            clearUser();
            setToast({state: "success", text: MUTATE_SUCCESS_MESSAGE.SIGN_OUT})
            navigate('/');
        }
    });
    return mutateAsync;
}