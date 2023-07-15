import styled from "styled-components";
import Symbol from "../common/Symbol";
import { makeCurrencyString, makeQuantityString } from "../../utils/makeCurrencyString";
import ReverageMag from "../common/ReverageMag";
interface Props{
  symbol: string,
  datetime: string,
  side: string,
  leverage: number,
  price: number,
  quoteQty: number,
  realizedPnl: number
}
function OrderInfo({symbol, datetime, side, leverage, price, quoteQty, realizedPnl} : Props){
  const dateString = `${datetime.slice(0,10)} ${datetime.slice(11, 16)}`;
  return <Container>
    <FlexWrapper>
        <Symbol name="eth"/>
        <Bold>{symbol}</Bold>
    </FlexWrapper>
    <FlexWrapper>
        <PriceWrapper>{makeCurrencyString(price, symbol, 3)}</PriceWrapper>
        <ReverageMag value={leverage}/>
    </FlexWrapper>
    <Wrapper>{makeQuantityString(quoteQty, symbol, 3)}</Wrapper>
    <Wrapper><Side $isBuy={side.toUpperCase() === "BUY"}>{side.toUpperCase()}</Side></Wrapper>
    <Wrapper><Bold>{makeCurrencyString(realizedPnl, symbol, 3)}</Bold></Wrapper>
    <Wrapper>{dateString}</Wrapper>
  </Container>
}
const Container = styled.div`
  width:  100%;
  height: 3rem;
  background-color: ${props => props.theme.light.white};
  border-radius: 2.5rem;
  font-size: 1.1rem;
  grid-template-columns: 1fr 0.75fr 0.25fr 0.25fr 0.5fr 1fr;
  display: grid;

`
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
`
const PriceWrapper = styled.div`
  text-align: right;
`
const Side = styled.div<{$isBuy: boolean}>`
  border-radius: 25px;
  background-color: ${props => props.$isBuy? props.theme.light.lightBlue : props.theme.light.pink};
  width: 3rem;
  color: ${props => props.theme.light.white};
  font-size: 1rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  justify-content: flex-end;
  align-items: center;
  height: 3rem;
  min-width: 6rem;
  text-align: center;
  white-space: nowrap;
`
const Bold = styled.div`
  font-weight: bold;
`

export default OrderInfo;