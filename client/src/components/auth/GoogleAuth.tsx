import { GoogleLogin } from "@react-oauth/google";
import { useToast } from "../../atoms/toast";
import useGoogleAuth from "./hooks/useGoogleAuth";
import styled from "styled-components";

export default function GoogleAuth(){
    const setToast = useToast();
    const googleAuth = useGoogleAuth();
    return <Wrapper>
        <GoogleLogin
            onSuccess={googleAuth}
            onError={() => { setToast({state: 'error', text:'구글 로그인에 실패했습니다' })}}
            useOneTap
            size='large'
            logo_alignment="center"
            width="268px"
            ux_mode="redirect"
        />
    </Wrapper>
}
const Wrapper = styled.div`
    margin-top: 1.25rem;
`