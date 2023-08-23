import styled from "styled-components";
import Symbol from "../common/Symbol";
import { makeCurrencyString, makeQuantityString, makeSymbolWithoutCurrency } from "../../utils/makeString";
import ReverageMag from "../common/ReverageMag";
import { useMediaQueries } from "../../hooks/useMediaQueries";
import dayjs from "dayjs";
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
  const mobileDateString = dayjs(datetime).format("YY.MM.DD HH:mm");
  const  { isMobile } = useMediaQueries();
  const priceString = makeCurrencyString(price, symbol, 3);
  const quoteQtyString = makeQuantityString(quoteQty, symbol, 3);
  const sideString = side.toUpperCase();
  const realizedPnlString = makeCurrencyString(realizedPnl, symbol, 3);
  const symbolString = makeSymbolWithoutCurrency(symbol).toLowerCase();
  if(!isMobile)
    return <Container>
      <SymbolWrapper>
          <Symbol name={symbolString}/>
          <Bold>{symbol}</Bold>
          <ReverageMag value={leverage}/>
      </SymbolWrapper>
      <Wrapper>
          <span>{priceString}</span>
      </Wrapper>
      <Wrapper>{quoteQtyString}</Wrapper>
      <Wrapper><Side $isBuy={side.toUpperCase() === "BUY"}>{sideString}</Side></Wrapper>
      <Wrapper><Bold>{realizedPnlString}</Bold></Wrapper>
      <DateWrapper>{dateString}</DateWrapper>
    </Container>
  else
    return <MobileContainer>
        <MobileLabelColumn>
          <MobileLabel>심볼</MobileLabel>
          <MobileLabel>거래가</MobileLabel>
          <MobileLabel>수량</MobileLabel>
          <MobileLabel>사이드</MobileLabel>
          <MobileLabel>실현 수익</MobileLabel>
          <MobileLabel>거래 시간</MobileLabel>
        </MobileLabelColumn>
        <MobileValueColumn>
          <MobileLongValue>
            <Symbol name="eth"/>
            <ReverageMag value={leverage}/>
            <span>{symbol}</span>
          </MobileLongValue>
          <MobilePrice>{priceString}</MobilePrice>
          <MobileLongValue>
              {quoteQtyString}
            </MobileLongValue>
          <MobileLongValue>
            <Side $isBuy={side.toUpperCase() === "BUY"}>{sideString}</Side>
          </MobileLongValue>
          <MobileValue>{realizedPnlString}</MobileValue>
          <MobileLongValue  >{mobileDateString}</MobileLongValue  >
        </MobileValueColumn>
    </MobileContainer>
}
const Container = styled.div`
  width:  100%;
  height: 3rem;
  background-color: ${props => props.theme.light.white};
  border-radius: 2.5rem;
  font-size: 1.1rem;
  grid-template-columns: 1fr 1fr .5fr .5fr .75fr .75fr;
  gap: 0.5rem;
  display: grid;
`
const SymbolWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  gap: 0.5rem;
  svg{
    width: 2rem;
    height: 2rem;
  }
  @media screen and (max-width: 767px){
    /* height: inherit; */
  }
`
const Side = styled.div<{$isBuy: boolean}>`
  border-radius: 25px;
  background-color: ${props => props.$isBuy? props.theme.light.lightBlue : props.theme.light.pink};
  width: 3rem;
  color: ${props => props.theme.light.white};
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
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
const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Bold = styled.div`
  font-weight: bold;
`
const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 1rem 1.5rem;
  :not(:last-child){
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
  }

`
const MobileLabel = styled.div`
  font-size: 1.2rem;
  min-width: 4.8rem;
`
const MobileLabelColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  gap: 0.5rem;
`
const MobileValueColumn = styled(MobileLabelColumn)`
  font-weight: 400;
  align-items: center;
`
const MobileLongValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 10rem;
  font-size: 1.2rem;
  text-align: center;
  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
`
const MobileValue = styled.div`
  font-size: 1.2rem;
  width: 5rem;
  text-align: center;
  `
const MobilePrice = styled.div`
  font-size: 1.2rem;
  min-width: 12rem;
  text-align: center;
`
export default OrderInfo;