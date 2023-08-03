import styled, { keyframes } from "styled-components";

export default function Spinner(){
    return <Wrapper><Ring><div></div><div></div><div></div><div></div></Ring></Wrapper>
}
const Wrapper = styled.div`
    position: relative;
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
    width: 50px;
    height: 50px;
    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 50px;
        height: 50px;
        margin: 6px;
        border: 6px solid ${props => props.theme.light.borderGray};
        border-radius: 50%;
        animation: ${Keyframe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.light.borderGray} transparent transparent transparent;
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

  