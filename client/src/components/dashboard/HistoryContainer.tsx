import styled from "styled-components"
import { EXCHANGE_BUTTON, EXCHANGE_BUTTON_ENUM } from "./type"
import BinanceHistory from "./binance/History"
import UpbitHistory from "./upbit/History"
import { OrderInfoSkeleton } from "./skeletons/OrderInfoSkeleton"
import AsyncWrapper from "../error/AsyncWrapper"
import Spinner from "../error/Spinner"
import { useState } from "react"
import { useMediaQueries } from "../../hooks/useMediaQueries"

export default function HistoryContainer({exchange} : {exchange : EXCHANGE_BUTTON}){
    const [count, setCount] = useState(0);
    const { isMobile } = useMediaQueries();
    return <Container>
      <Head>
        <h1>거래 내역</h1>
        <Count>{count}</Count>
      </Head>
      <Wrapper>
        {
        !isMobile && 
        <Labels>
          <li>심볼</li>
          <li>거래가</li>
          <li>수량</li>
          <li>실현 수익</li>
          <li>거래 시간</li>
        </Labels>
        }
        <AsyncWrapper errorFallback={<Spinner/>} suspenseFallback={<>{Array(8).fill(0).map((item, i) => <OrderInfoSkeleton key={i}/>)}</>}>
          { exchange === EXCHANGE_BUTTON_ENUM.binance && <BinanceHistory setCount={setCount}/>}
          { exchange === EXCHANGE_BUTTON_ENUM.upbit && <UpbitHistory setCount={setCount}/> }
        </AsyncWrapper>
      </Wrapper>
  </Container>
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.0rem;
  min-width: 62.5rem;
  @media screen and (max-width: 1280px){
    min-width: 65.25rem;
  }
  @media screen and (max-width: 767px){
    min-width: 32rem;
  }
`
const Wrapper = styled.div`
  box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 15px;
  padding: 0 2rem 2rem 2rem;
  background-color: ${props => props.theme.light.white};
  overflow-y: auto;
  @media screen and (max-width: 767px){
    padding: 0.5rem 0.5rem;
    gap: 0rem;
  }
`
const Labels = styled.ul`
  position: sticky;
  top: -5px;
  height: 2.5rem;
  width: 100%;
  background-color: ${props => props.theme.light.white};
  font-size: 1.5rem;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.85fr 0.85fr;
  text-align: center;
  list-style: none;
  padding: 2rem 0;
`
const Count = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: ${props => props.theme.light.borderGray};
    color: ${props => props.theme.light.darkGray};
    padding: 0.2rem 0.5rem;
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
`