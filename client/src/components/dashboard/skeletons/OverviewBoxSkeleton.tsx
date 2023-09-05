import styled from "styled-components"
import { Skeleton } from "../../common/Skeleton"
import { Container, Header } from "../OverviewBox"

export const OverviewBoxSkeleton = () => (
    <Container>
        <Header>
            <Title/>
            <Circle/>
        </Header>
        <Value/>
        <Trend/>
    </Container>
)
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
    @media screen and (max-width: 767px){ 
        width: 3.75rem;
        height: 1.5rem;
    }
`
const Trend = styled(Skeleton)`
    border-radius: 1.5rem;
    max-width: 3.5rem;
    padding: 0.3rem 0.5rem;
`