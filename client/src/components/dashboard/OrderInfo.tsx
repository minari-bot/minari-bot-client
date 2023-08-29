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
        <MobileDateHeader>
          <MobileLabel>{dateString}</MobileLabel>
          <MobileSideWrapper>
            <Side $isBuy={side.toUpperCase() === "BUY"}>{sideString}</Side>
            <ReverageMag value={leverage}/>
          </MobileSideWrapper>
        </MobileDateHeader>
        <MobileInfoWrapper>
          <MobileLabelColumn>
            <MobileLabel>심볼</MobileLabel>
            <MobileLabel>거래가</MobileLabel>
            <MobileLabel>수량</MobileLabel>
            <MobileLabel>실현 수익</MobileLabel>
          </MobileLabelColumn>
          <MobileValueColumn>
            <MobileLongValue>
              <Symbol name={symbolString}/>
              <span>{symbol}</span>
            </MobileLongValue>
            <MobileValue>{priceString}</MobileValue>
            <MobileValue>{quoteQtyString}</MobileValue>
            <MobileValue>{realizedPnlString}</MobileValue>
          </MobileValueColumn>
        </MobileInfoWrapper>
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
  padding: 0.1rem 0;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  :not(:last-child){
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
  }
`
const MobileInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 3rem;
`
const MobileDateHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  padding-bottom: 0.5rem;
`
const MobileSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
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
  align-items: flex-end;
`
const MobileLongValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.2rem;
  svg{
    height: 1.5rem;
  }
`
const MobileValue = styled.div`
  font-size: 1.2rem;
  text-align: right;
`
export default OrderInfo;