import styled from "styled-components"
import Header from "../components/common/Header"
import ImgButton from "../components/common/ImgButton"
import { EXCHANGE } from "../global/type";
import { Suspense, useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import StrategyContainer from "../components/admin/StrategyContainer";
import StrategyForm from "../components/admin/StrategyForm";
import EditForm from "../components/admin/EditForm";
import { StrategyBoxSkeleton } from "../components/admin/skeletons/StrategyBoxSkeleton";
import AsyncWrapper from "../components/error/AsyncWrapper";
import ErrorPage from "../components/error/ErrorComponent";
import ErrorComponent from "../components/error/ErrorComponent";
import { Helmet } from "react-helmet-async";
import { useMediaQueries } from "../components/hooks/useMediaQueries";
import Spinner from "../components/error/Spinner";
export const rightSideUIState ={
    edit : "edit",
    create : "create",
    none : "none",
}
export default function AdminStrategy(){
    const { isPc } = useMediaQueries();
    const [exchangeSelect, setExchangeSelect] = useState(EXCHANGE.binance);
    const [rightSideUIMode, setRightSideUIMode] = useState(rightSideUIState.none);
    const strategyListSuspenseFallback = <>{Array(6).fill(0).map((t, i) => <StrategyBoxSkeleton key={i}/>)}</>
    return <>
    <Helmet><title>전략 관리</title></Helmet>
    <AsyncWrapper  suspenseFallback={<Spinner/>}>
        <Container>
            { isPc && <Header/> }
            <Title>전략 관리</Title>
            <Icons>
                <ImgButton onClick={() => setExchangeSelect(EXCHANGE.binance)} title={EXCHANGE.binance} isSelect={exchangeSelect === EXCHANGE.binance} img={binanceLogo}/>
                <ImgButton onClick={() => setExchangeSelect(EXCHANGE.upbit)} title={EXCHANGE.upbit} isSelect={exchangeSelect === EXCHANGE.upbit} img={upbitLogo}/>
            </Icons>
            <Main>
                {
                    !isPc && !(rightSideUIMode === rightSideUIState.none)?
                    <></>
                    :
                    <ListContainer>
                        <AsyncWrapper suspenseFallback={strategyListSuspenseFallback}>
                            <StrategyContainer exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode}/>
                        </AsyncWrapper>
                    </ListContainer>
                    
                }
                {
                    !isPc && rightSideUIMode === rightSideUIState.none?
                    <></>
                    :
                    <SideWrapper>
                        {
                            rightSideUIMode === rightSideUIState.none?
                            <></>
                            :
                            rightSideUIMode === rightSideUIState.create?
                            <StrategyForm exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode}/>
                            :
                            <EditForm exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode} />
                        }
                        
                    </SideWrapper>
                }
            </Main>
        </Container>
    </AsyncWrapper>
    </>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.0rem;
    @media screen and (max-width: 1279px){
        padding-top: 7.5rem;
    }
`
const Title = styled.h1`
    color: ${props => props.theme.light.black};
    font-size: 2.6rem;
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
`
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 7rem;
    padding-bottom: 8rem;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 15px;
    width: 41.5rem;
`
const SideWrapper = styled.div`
    width: 35rem;
`