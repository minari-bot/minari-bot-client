import styled from "styled-components"
import ReverageMag from "./ReverageMag"
import Symbol from "../common/Symbol"
interface Props {
    symbolName : string,
    title : string,
    magnitude: number,
    profit : number,
    winRate : number,
    trasanctions: number
}
export default function StrategyBox({symbolName, title, magnitude, profit, winRate, trasanctions} : Props){
    return <Container>
        <Column>
            <SymbolItems>
                <Symbol name={symbolName.split('/')[0].toLowerCase()}/>
                <SymbolName>{symbolName}</SymbolName>
                <ReverageMag value={magnitude}/>
            </SymbolItems>
            <Title>{title}</Title>
        </Column>
        <InfoWrapper>
            <Info>
                <Label>수익률</Label>
                <Value>{profit}%</Value>
            </Info>
            <Info>
                <Label>승률</Label>
                <Value>{winRate}%</Value>
            </Info>
            <Info>
                <Label>거래량</Label>
                <Value>{trasanctions}</Value>
            </Info>
        </InfoWrapper>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 37rem; */
    gap: 5rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 1.5rem;
    padding: 1.5rem 3rem;

`
const SymbolItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    svg{
        width: 1.8rem;
        height: 1.8rem;
    }
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
    
`
const Value = styled.div`
    font-size: 1.4rem;
`
const SymbolName = styled.div`

`
const Title = styled.h3`
    font-weight: normal;
    font-size: 1.4rem;
`