import styled from "styled-components";
import { EXCHANGE_BUTTON, EXCHANGE_BUTTON_ENUM} from "./type";
import BinanceStrategy from "./binance/Strategy";
import UpbitStrategy from "./upbit/Strategy";
import { Suspense, useState } from "react";
import { StrategyBoxSkeleton } from "./skeletons/StrategyBoxSkeleton";
import AsyncWrapper from "../error/AsyncWrapper";
import Spinner from "../error/Spinner";

export default function StrategyContainer({exchange} : {exchange : EXCHANGE_BUTTON}){
    const [count, setCount] = useState(0);
    return <Container>
            <Head>
                <h1>구독 전략</h1>
                <Count>{count}</Count>
            </Head>
            <AsyncWrapper errorFallback={<Spinner/>} suspenseFallback={<>{Array(5).fill(0).map((item, i) => <StrategyBoxSkeleton key={i}/>)}</>}>
                <StrategyWrapper>
                    {exchange === EXCHANGE_BUTTON_ENUM.binance && <BinanceStrategy setCount={setCount}/>}
                    {exchange === EXCHANGE_BUTTON_ENUM.upbit && <UpbitStrategy setCount={setCount}/>}
                </StrategyWrapper>
            </AsyncWrapper>
        </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    min-width: 32rem;
    width: 100%;
    @media screen and (max-width: 1279px){
        min-width: 65.25rem;
    }
    @media screen and (max-width: 767px){
        min-width: 32rem;
    }
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`
const Count = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: ${props => props.theme.light.borderGray};
    color: ${props => props.theme.light.darkGray};
    padding: 0.2rem 0.5rem;
`
const StrategyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
    gap: 1.25rem;
    @media screen and (max-width: 1280px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
    }
`