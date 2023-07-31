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
                <StrategyCount>{count}</StrategyCount>
            </Head>
            <Suspense fallback={<>{Array(5).fill(0).map((item, i) => <StrategyBoxSkeleton key={i}/>)}</>}>
                {exchange === EXCHANGE_BUTTON_ENUM.binance && <BinanceStrategy setCount={setCount}/>}
                {exchange === EXCHANGE_BUTTON_ENUM.upbit && <UpbitStrategy setCount={setCount}/>}
            </Suspense>

        </Container>
}
const Container = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
`
const StrategyCount = styled.div`
    font-weight: 700;
    border-radius: 5px;
    background-color: ${props => props.theme.light.borderGray};
    color: ${props => props.theme.light.darkGray};
    padding: 0.2rem 0.5rem;
`