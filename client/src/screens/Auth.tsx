import { useMatch } from "react-router-dom";
import styled from "styled-components"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
export default function Auth (){
    const signInRouteMatch = useMatch("/auth/signin");
    const signUpRouteMatch = useMatch("/auth/signup");
    const [signUpError, setSignUpError] = useState("");
    const [signInError, setSignInError] = useState("");
    return <>
        <Helmet><title>로그인</title></Helmet>
        {signInRouteMatch && 
            <Wrapper>
                <SignIn signInError={signInError} setSignInError={setSignInError}/>
            </Wrapper>}
        {signUpRouteMatch && 
            <Wrapper>
                <SignUp signUpError={signUpError} setSignUpError={setSignUpError}/>
            </Wrapper>}
    </>
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70rem;
`