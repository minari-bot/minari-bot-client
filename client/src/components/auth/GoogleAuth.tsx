import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { auth } from "../../apis/auth";
import { useRecoilState } from "recoil";
import { toastState } from "../../atoms/toast";

export default function GoogleAuth(){
    const navigate = useNavigate();
    const [toast, setToast] = useRecoilState(toastState);
    const onSuccess = async (credentialResponse: CredentialResponse) => {
        if(!credentialResponse.credential) {
            setToast({state: 'error', text:'구글 로그인에 실패했습니다'});
            return;
        }
        await auth.googleSignIn(credentialResponse.credential);
        navigate('/');
    }
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={() => {
                setToast({state: 'error', text:'구글 로그인에 실패했습니다'})
            }}
            useOneTap
        />);
}