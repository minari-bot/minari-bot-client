import styled, { keyframes } from "styled-components";
export const loadingAnimation = keyframes`
    0% {
        background-color: hsl(0, 0%, 85%);
    }
    100% {
        background-color: hsl(0, 20%, 95%);
    }
`
export const Skeleton = styled.div`
  background-color: ${props => props.theme.light.borderGray};
  animation: ${loadingAnimation} 1s linear infinite alternate;
`