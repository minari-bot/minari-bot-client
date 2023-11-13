import { useMutation, useQueryClient } from "@tanstack/react-query";
import { auth } from "../../../apis/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export default function useSignUp(){
    const { updateUser } = useUser();
    const navigate = useNavigate();
    const { mutateAsync, data } = useMutation({
        mutationFn: auth.signUp
    });
    useEffect(() => {
        updateUser(data);
    }, [data]);

    return mutateAsync;
}