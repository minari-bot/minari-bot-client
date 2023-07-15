import styled, { keyframes } from "styled-components"
import { loadingAnimation } from "./loadingAnimation"

export const StrategyBoxSkeleton = () => (
    <Container>
    <Column>
        <SymbolItems>
            <Symbol/>
            <Title/>
            <ReverageMag/>
        </SymbolItems>
        <Title/>
    </Column>
    <InfoWrapper>
        <Info>
            <Label/>
            <Label/>
        </Info>
        <Info>
            <Label/>
            <Label/>
        </Info>
        <Info>
            <Label/>
            <Label/>
        </Info>
    </InfoWrapper>
</Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35rem;
    gap: 5rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 1.5rem;
    padding: 1.5rem 2rem;

`
const Symbol = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 2rem;
    background-color: ${props => props.theme.light.borderGray};
    animation: ${loadingAnimation} 1s linear infinite alternate;

`
const ReverageMag = styled.div`
    width: 2rem;
    height: 1.5rem;
    background-color: ${props => props.theme.light.borderGray};
    animation: ${loadingAnimation} 1s linear infinite alternate;

`
const SymbolItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > div:not(:last-of-type){
        border-right: 1px solid ${props => props.theme.light.borderGray};
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    
`
const Label = styled.div`
    width: 3rem;
    height: 1.5rem;
    background-color: ${props => props.theme.light.borderGray};
    animation: ${loadingAnimation} 1s linear infinite alternate;

`
const Title = styled.h3`
    width: 6rem;
    height: 1.5rem;
    background-color: ${props => props.theme.light.borderGray};
    animation: ${loadingAnimation} 1s linear infinite alternate;

`

