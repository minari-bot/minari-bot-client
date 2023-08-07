import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MUTATE_SUCCESS_MESSAGE, queryKeys } from "../../../react-query/constants";
import { useToast } from "../../../atoms/toast";
import { auth } from "../../../apis/auth";

export default function useSignOut(){
    const setToast = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutateAsync } = useMutation(auth.signOut, {
        onSuccess: () => {
        queryClient.setQueryData([queryKeys.user], null);
        navigate('/');
        setToast({state: "success", text: MUTATE_SUCCESS_MESSAGE.SIGN_OUT})
    }});
    return mutateAsync;
}