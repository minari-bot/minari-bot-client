import styled from "styled-components"
import LongSumbitButton from "../common/LongSubmitButton"

export default function ErrorComponent(reset : any){
    return <Container>
        <h2>서버로부터 데이터를 불러오는 실패하였습니다.</h2>
        <LongSumbitButton title="다시 시도" onClick={reset.reset}/>
    </Container>
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`