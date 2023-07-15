import styled from "styled-components"
import { loadingAnimation } from "./loadingAnimation"

export const OverallStatBoxSkeleton = () => (
    <Container>
        <Header>
            <Title/>
            <Circle/>
        </Header>
        <Value/>
        <Trend/>
    </Container>
)
const Container = styled.div`
    width: 16rem;
    height: 8rem;
    padding: 1.2rem 2rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    background: ${props => props.theme.light.white};
    border-radius: 15px;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
    gap: 1.0rem;
`
const Skeleton = styled.div`
  background-color: ${props => props.theme.light.borderGray};
  animation: ${loadingAnimation} 1s linear infinite alternate;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Circle = styled(Skeleton)`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
`
const Title = styled(Skeleton)`
    width: 2rem;
    height: 1.8rem;
`
const Value = styled(Skeleton)`
    width: 4rem;
    height: 1.8rem;
    margin: 0 auto;
`
const Trend = styled(Skeleton)`
    border-radius: 1.5rem;
    max-width: 3.5rem;
    padding: 0.3rem 0.5rem;
`