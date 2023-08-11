import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../apis/auth";
import { queryKeys } from "../../../react-query/constants";
import { useUser } from "../../../hooks/useUser";

export default function useSignIn(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { updateUser } = useUser();
    const { mutateAsync, isLoading, isError, error } = useMutation(auth.signIn,{
        onSuccess: (user) => {
            // queryClient.setQueryData([queryKeys.user], user);
            updateUser(user)
            navigate('/dashboard');
        }
    });
    return mutateAsync;
}