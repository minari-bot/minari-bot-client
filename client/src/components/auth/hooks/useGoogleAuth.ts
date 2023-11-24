import { useNavigate } from "react-router-dom";
import { useToast } from "../../../atoms/toast";
import { useUser } from "../../hooks/useUser";
import { CredentialResponse } from "@react-oauth/google";
import { auth } from "../../../apis/auth";
import { AxiosError } from "axios";

const useGoogleAuth = () => {
    const navigate = useNavigate();
    const setToast = useToast();
    const { updateUser } = useUser();
    const onSuccess = async (credentialResponse: CredentialResponse) => {
        try{
            if(!credentialResponse.credential) {
                setToast({state: 'error', text:'구글 로그인에 실패했습니다'});
                return; 
            }
            const data = await auth.googleSignIn(credentialResponse.credential);
            const userInfo = {
                email: data?.email,
                name: data?.name,
                userType:'',
            }
            updateUser(userInfo);
            navigate('/');
        }
        catch(err){
            const error = err as AxiosError;
            setToast({ state: 'error', text: error.message });
        }
    }
    return onSuccess;
}
export default useGoogleAuth;
