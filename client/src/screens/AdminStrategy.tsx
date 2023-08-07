import styled from "styled-components"
import Header from "../components/common/Header"
import ImgButton from "../components/common/ImgButton"
import { EXCHANGE } from "../global/type";
import { Suspense, useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import { StrategyBoxSkeleton } from "../components/dashboard/skeletons/StrategyBoxSkeleton";
import StrategyContainer from "../components/admin/StrategyContainer";
import StrategyForm from "../components/admin/StrategyForm";
import EditForm from "../components/admin/EditForm";
export const rightSideUIState ={
    edit : "edit",
    create : "create",
}
export default function AdminStrategy(){
    const [exchangeSelect, setExchangeSelect] = useState(EXCHANGE.binance);
    const [rightSideUIMode, setRightSideUIMode] = useState(rightSideUIState.create);
    return <Container>
        <Header/>
        <Title>전략 등록</Title>
        <Icons>
            <ImgButton onClick={() => setExchangeSelect(EXCHANGE.binance)} title={EXCHANGE.binance} isSelect={exchangeSelect === EXCHANGE.binance} img={binanceLogo}/>
            <ImgButton onClick={() => setExchangeSelect(EXCHANGE.upbit)} title={EXCHANGE.upbit} isSelect={exchangeSelect === EXCHANGE.upbit} img={upbitLogo}/>
        </Icons>
        <Main>
            <ListContainer>
                <Suspense fallback={Array(6).fill(0).map((t, i) => <StrategyBoxSkeleton key={i}/>)}>
                    <StrategyContainer exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode}/>
                </Suspense>
            </ListContainer>
            <SideWrapper>
                {
                    rightSideUIMode === rightSideUIState.create? 
                    <StrategyForm exchange={exchangeSelect}/>
                    :
                    <EditForm exchange={exchangeSelect} />
                }
                
            </SideWrapper>
        </Main>
    </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.0rem;
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