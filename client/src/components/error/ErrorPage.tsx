import styled from "styled-components"

export default function ErrorPage(){
    return <Container>
        <h1>에러가 발생했습니다.</h1>
    </Container>
}

const Container = styled.div`
    width: 80rem;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
`