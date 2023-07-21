import styled from "styled-components"
import ReverageMag from "../common/ReverageMag"
import Symbol from "../common/Symbol"
interface Props{
    symbol: string,
    leverage: number,
    strategyName: string,
    winRate: number,
    profitPercent: number,
    strategyUrl: string,
}
export default function StrategyBox({symbol, leverage, strategyName, winRate, profitPercent, strategyUrl} : Props){
    return <Container>
        <Column>
            <SymbolItems>
                <Symbol name={symbol?.split('/')[0].toLowerCase()}/>
                <SymbolName>{symbol || ""}</SymbolName>
                <ReverageMag value={leverage || 0}/>
            </SymbolItems>
            <Title>{strategyName || ""}</Title>
        </Column>
        <InfoWrapper>
            <Info>
                <Label>수익률</Label>
                <Value>{profitPercent}%</Value>
            </Info>
            <Info>
                <Label>승률</Label>
                <Value>{winRate}%</Value>
            </Info>
            <Info>
                <Label>거래량</Label>
                <Value>{0}</Value>
            </Info>
        </InfoWrapper>
    </Container>
}

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
    font-weight: bold;
`
const Value = styled.div`
    font-size: 1.4rem;
`
const SymbolName = styled.div`

`
const Title = styled.h3`
    font-weight: normal;
    font-size: 1.2rem;
`