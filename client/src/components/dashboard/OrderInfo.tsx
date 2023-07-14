import styled from "styled-components";
import { binanceTradeData } from "./dashboardType";
import Symbol from "../common/Symbol";
import { makeCurrencyString, makeQuantityString } from "../../utils/makeCurrencyString";
import ReverageMag from "./ReverageMag";
interface OrderInfoProps{
    tradeData : binanceTradeData
}
function OrderInfo({tradeData} : OrderInfoProps){
  const dateString = `${tradeData?.datetime.slice(0,10)} ${tradeData?.datetime.slice(11, 16)}`;
  return tradeData.orderId? <Container>
    <FlexWrapper>
        <Symbol name="eth"/>
        <Bold>{tradeData.symbol}</Bold>
    </FlexWrapper>
    <FlexWrapper>
        <PriceWrapper>{makeCurrencyString(Number(tradeData?.price), tradeData.symbol, 3)}</PriceWrapper>
        <ReverageMag value={3}/>
    </FlexWrapper>
    <Wrapper>{makeQuantityString(Number(tradeData?.quoteQty), tradeData.symbol, 3)}</Wrapper>
    <Wrapper><Side $isBuy={tradeData?.side.toUpperCase() === "BUY"}>{tradeData?.side.toUpperCase()}</Side></Wrapper>
    <Wrapper><Bold>{makeCurrencyString(Number(tradeData?.realizedPnl), tradeData?.symbol, 3)}</Bold></Wrapper>
    <Wrapper>{dateString}</Wrapper>
  </Container>
  :
  null
  // <Container>
  //   <Bold>{tradeData.message}</Bold>
  //   <div>{dateString}</div>
  // </Container>
}
const Container = styled.div`
  width:  100%;
  height: 3rem;
  background-color: ${props => props.theme.light.white};
  border-radius: 2.5rem;
  font-size: 1.1rem;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr 1fr 1fr;
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
  background-color: ${props => props.$isBuy? props.theme.light.ellipse1 : props.theme.light.ellipse2};
  width: 4rem;
  color: white;
  font-size: 1rem;

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  justify-content: flex-end;
  align-items: center;
  height: 3.5rem;
  min-width: 6rem;
  text-align: center;
  white-space: nowrap;
`
const Price = styled.div`
  
`
const Bold = styled.div`
  font-weight: bold;
`

export default OrderInfo;