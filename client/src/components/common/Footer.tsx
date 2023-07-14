import styled from "styled-components"

export default function Footer () {
    return <Wrapper>
        <div>ⓒ 2023 MINARI-LAB. All rights reserved.</div>
    </Wrapper>
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin-top: 5rem;
    height: 6rem;
    width: 100vw;
    background-color: ${props => props.theme.light.lightGray};
    color: ${props => props.theme.light.white};
    font-size: 1.2rem;
`