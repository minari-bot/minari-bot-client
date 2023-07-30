import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MUTATE_SUCCESS_MESSAGE, queryKeys } from "../../../react-query/constants";
import { toastState } from "../../../atoms/toast";
import { useRecoilState } from "recoil";
import { auth } from "../../../apis/auth";

export default function useSignOut(){
    const [toast, setToast] = useRecoilState(toastState);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutateAsync } = useMutation(auth.signOut, {
        onSuccess: () => {
        queryClient.setQueryData([queryKeys.user], null);
        navigate('/');
            setToast(prev => ({
            ...prev,
            isOpen : true,
            text: MUTATE_SUCCESS_MESSAGE.SIGN_OUT,
            state : "success"
        }))}
    });
    return mutateAsync;
}