import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../apis/auth";
import { queryKeys } from "../../../react-query/constants";

export default function useSignIn(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutateAsync, isLoading, isError, error } = useMutation(auth.signIn,{
        onSuccess: (data) => {
            queryClient.setQueryData([queryKeys.user], data);
            navigate('/dashboard');
        }
    });
    return mutateAsync;
}