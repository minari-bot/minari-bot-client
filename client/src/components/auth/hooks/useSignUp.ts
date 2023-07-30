import { useMutation, useQueryClient } from "@tanstack/react-query";
import { auth } from "../../../apis/auth";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "../../../react-query/constants";

export default function useSignUp(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutateAsync } = useMutation(auth.signUp,{
        onSuccess: (data) => {
            queryClient.setQueryData([queryKeys.user], data);
            navigate('/dashboard');
        }
    });
    return mutateAsync;
}