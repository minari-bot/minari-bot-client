import { AnimatePresence, motion } from "framer-motion";
import { useMatch } from "react-router-dom";
import styled from "styled-components"
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { useState } from "react";

export default function Auth (){
    const signInRouteMatch = useMatch("/auth/signin");
    const signUpRouteMatch = useMatch("/auth/signup");
    const [signUpError, setSignUpError] = useState("");
    const [signInError, setSignInError] = useState("");
    return <AnimatePresence>
            {signInRouteMatch && <Wrapper>
                    <Animate
                        initial={{x : 400}}
                        animate={{x : 0}}
                        exit={{x : -400}}
                        transition={{type: "spring", duration: 1, }}
                    ><SignIn signInError={signInError} setSignInError={setSignInError}/></Animate>
                    <Cover
                        layoutId="cover"
                        transition={{type: "spring", duration: 1, }}
                        $isLeft={signInRouteMatch?  true : false}
                    >
                         {signInError === ""? null : <ErrorBox>
                            {signInError}    
                        </ErrorBox>}
                    </Cover>
                </Wrapper>}
            {signUpRouteMatch && <Wrapper>
                    <Cover 
                        layoutId="cover"
                        transition={{type: "spring", duration: 1, }}
                        $isLeft={signUpRouteMatch? false : true}
                    >
                        {signUpError === ""? null : <ErrorBox>
                            {signUpError}    
                        </ErrorBox>}
                    </Cover>
                    <Animate
                         initial={{x : -400}}
                         animate={{x : 0}}
                         exit={{x : 400}}
                         transition={{type: "spring", duration: 1, }}
                    ><SignUp signUpError={signUpError} setSignUpError={setSignUpError}/></Animate>
                </Wrapper>}
        </AnimatePresence>
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70rem;
`
const ErrorBox = styled.div`
    width: 25rem;
    height: 8rem;
`
const Cover = styled(motion.div)<{$isLeft : boolean}>`
    position: relative;
    z-index: 3;
    left: ${props => props.$isLeft? "-18px" : "18px"};
    width: 35rem;
    height: 50rem;
    background-color: ${props => props.theme.light.backgroundGray};
    border-radius: 1.5rem;
    border: 1px solid ${props => props.theme.black.gray};
`
const Animate = styled(motion.div)`
    
`