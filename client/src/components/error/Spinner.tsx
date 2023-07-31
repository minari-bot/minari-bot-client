import styled, { keyframes } from "styled-components";

export default function Spinner(){
    return <Wrapper><Ring><div></div><div></div><div></div><div></div></Ring></Wrapper>
}
const Wrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 47.5%;
`
const Keyframe = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const Ring = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${props => props.theme.light.lightBlue};
        border-radius: 50%;
        animation: ${Keyframe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.light.lightBlue} transparent transparent transparent;
    }
    div:nth-child(1){
        animation-delay: -0.45s;
    }
    div:nth-child(2){
        animation-delay: -0.3s;
    }
    div:nth-child(3){
        animation-delay: -0.15s;
    }
`

  