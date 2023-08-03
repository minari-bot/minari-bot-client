import styled from "styled-components"
import { EXCHANGE_BUTTON, EXCHANGE_BUTTON_ENUM } from "./type"
import BinanceHistory from "./binance/History"
import UpbitHistory from "./upbit/History"
import { Suspense } from "react"
import { OrderInfoSkeleton } from "./skeletons/OrderInfoSkeleton"
import AsyncWrapper from "../error/AsyncWrapper"
import Spinner from "../error/Spinner"

export default function HistoryContainer({exchange} : {exchange : EXCHANGE_BUTTON}){
    return <Container>
    <Labels>
      <li>심볼</li>
      <li>거래가</li>
      <li>수량</li>
      <li>사이드</li>
      <li>실현 수익</li>
      <li>거래 시간</li>
    </Labels>

    <AsyncWrapper errorFallback={<Spinner/>} suspenseFallback={<>{Array(8).fill(0).map((item, i) => <OrderInfoSkeleton key={i}/>)}</>}>
      { exchange === EXCHANGE_BUTTON_ENUM.binance && <BinanceHistory/>}
      { exchange === EXCHANGE_BUTTON_ENUM.upbit && <UpbitHistory/> }
    </AsyncWrapper>
  </Container>
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70rem;
  /* min-height: 40rem; */
  border-radius: 35px;
  padding: 0 2.5rem 2rem 0.5rem;
  box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.light.white};
  overflow-y: auto;
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
  grid-template-columns: 1fr 0.75fr 0.5fr 0.5fr 0.5fr 1fr;
  text-align: center;
  list-style: none;
  padding-top: 2rem;
  padding-left: 0;
`