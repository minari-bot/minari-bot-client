import styled, { keyframes } from "styled-components"
import { Skeleton } from "../../common/Skeleton"
import { Container } from "../StrategyBox"

export const StrategyBoxSkeleton = () => (
    <Container>
    <Column>
        <SymbolItems>
            <Symbol/>
            <Title/>
            <ReverageMag/>
        </SymbolItems>
        <SymbolItems>
            <Square/>
            <Title></Title>
        </SymbolItems>
            
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

const Symbol = styled(Skeleton)`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 2rem;
`
const Square = styled(Symbol)`
    border-radius: 0;
`
const ReverageMag = styled(Skeleton)`
    width: 2rem;
    height: 1.5rem;
`
const SymbolItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
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
const Label = styled(Skeleton)`
    width: 3rem;
    height: 1.5rem;
`
const Title = styled(Skeleton)`
    width: 6rem;
    height: 1.5rem;
`

