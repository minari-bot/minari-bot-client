import styled from "styled-components";
import Header from "../components/common/Header";
import ImgButton from "../components/common/ImgButton";
import { useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import KeyList from "../components/api/KeyList";
import { EXCHANGE } from "../global/type";
import KeyRegisterForm from "../components/api/KeyRegisterForm";
import KeyInfo from "../components/api/KeyInfo";
import ErrorPage from "../components/error/ErrorPage";
import AsyncWrapper from "../components/error/AsyncWrapper";
import Spinner from "../components/error/Spinner";

export const rightSideUIState ={
    nothing : "nothing",
    keyAdd : "keyAdd",
    keyInfo : "keyInfo",
}
export default function Api(){
    const [exchangeSelect, setExchangeSelect] = useState(EXCHANGE.binance);
    const [selectedKeyId, setSelectedKeyId] = useState("");
    const [label, setLabel] = useState("");
    const [rightSideUIMode, setRightSideUIMode] = useState(rightSideUIState.nothing);
    return <Container>
        <Header/>
        <AsyncWrapper errorFallback={<ErrorPage/>} suspenseFallback={<></>}>
            <>
                <Icons>
                    <ImgButton onClick={() => setExchangeSelect(EXCHANGE.binance)} title={EXCHANGE.binance} isSelect={exchangeSelect === EXCHANGE.binance} img={binanceLogo}/>
                    <ImgButton onClick={() => setExchangeSelect(EXCHANGE.upbit)} title={EXCHANGE.upbit} isSelect={exchangeSelect === EXCHANGE.upbit} img={upbitLogo}/>
                </Icons>
                <Main>
                    <KeyList exchange={exchangeSelect} setSelectedKeyId={setSelectedKeyId} setRightSideUIMode={setRightSideUIMode} setLabel={setLabel}/>
                    <SideWrapper>
                        { 
                            rightSideUIMode === rightSideUIState.keyAdd? 
                            <KeyRegisterForm exchange={exchangeSelect}/>
                            :
                            rightSideUIMode === rightSideUIState.keyInfo?
                            <KeyInfo selectedKeyId={selectedKeyId} label={label} />
                            :
                            null
                        }
                    </SideWrapper>
                </Main>
            </>
        </AsyncWrapper>
    </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    gap: 1.0rem;
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
`
const SideWrapper = styled.div`
    width: 35rem;
`
const Title = styled.h1`
`
