import { useMutation } from "@tanstack/react-query";
import { auth } from "../../../apis/auth";
import { useUser } from "../../hooks/useUser";

export default function useSignIn(){
    const { updateUser } = useUser();
    const { mutateAsync } = useMutation({
        mutationFn : auth.signIn,
        onSuccess: (data) => {
            updateUser(data);
        } 
    })

    return mutateAsync;
}