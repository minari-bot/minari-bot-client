import styled from "styled-components";
import Header from "../components/common/Header";
import ImgButton from "../components/common/ImgButton";
import { Suspense, useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import KeyList from "../components/api/KeyList";
import { EXCHANGE } from "../global/type";
import KeyRegisterForm from "../components/api/KeyRegisterForm";
import KeyInfo from "../components/api/KeyInfo";
import ErrorPage from "../components/error/ErrorPage";
import AsyncWrapper from "../components/error/AsyncWrapper";
import Spinner from "../components/error/Spinner";
import KeyBoxSkeleton from "../components/api/skeletons/KeyBoxSkeleton";
import { Helmet } from "react-helmet-async";
import { useMediaQueries } from "../hooks/useMediaQueries";

export const rightSideUIState ={
    none : "none",
    keyAdd : "keyAdd",
    keyInfo : "keyInfo",
}
export default function Api(){
    const [exchangeSelect, setExchangeSelect] = useState(EXCHANGE.binance);
    const [selectedKeyId, setSelectedKeyId] = useState("");
    const [label, setLabel] = useState("");
    const [rightSideUIMode, setRightSideUIMode] = useState(rightSideUIState.none);
    const { isPc } = useMediaQueries();

    return <>
        <Helmet><title>API Keys</title></Helmet>
        <AsyncWrapper errorFallback={<ErrorPage/>} suspenseFallback={<Spinner/>}>
            <Container>
                { isPc && <Header/> }
                    <>
                        <Icons>
                            <ImgButton onClick={() => setExchangeSelect(EXCHANGE.binance)} title={EXCHANGE.binance} isSelect={exchangeSelect === EXCHANGE.binance} img={binanceLogo}/>
                            <ImgButton onClick={() => setExchangeSelect(EXCHANGE.upbit)} title={EXCHANGE.upbit} isSelect={exchangeSelect === EXCHANGE.upbit} img={upbitLogo}/>
                        </Icons>
                        <Main>
                            {
                                !isPc && !(rightSideUIMode === rightSideUIState.none)?
                                <></>
                                :
                                <KeyListContainer>
                                    <Suspense fallback={Array(6).fill(0).map((t, i) => <KeyBoxSkeleton key={i}/>)}>
                                        <KeyList exchange={exchangeSelect} setSelectedKeyId={setSelectedKeyId} setRightSideUIMode={setRightSideUIMode} setLabel={setLabel}/>
                                    </Suspense>
                                </KeyListContainer>
                            }
                            {
                                !isPc && rightSideUIMode === rightSideUIState.none?
                                <></>
                                :
                                <SideWrapper>
                                    { 
                                        rightSideUIMode === rightSideUIState.keyAdd? 
                                        <KeyRegisterForm exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode}/>
                                        :
                                        rightSideUIMode === rightSideUIState.keyInfo?
                                        <KeyInfo selectedKeyId={selectedKeyId} label={label} setRightSideUIMode={setRightSideUIMode} />
                                        :
                                        null
                                    }
                                </SideWrapper>
                            }
                        </Main>
                    </>
            </Container>
        </AsyncWrapper>
    </>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    gap: 1.0rem;
    @media screen and (max-width: 1278px){
        padding-top: 7.5rem;
    }
`
const KeyListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 15px;
    min-width: 50rem;
    @media screen and (max-width: 767px){
        min-width: 35rem;
    }
    @media screen and (max-width: 390px){
        min-width: 27.5rem;
    }
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
    min-width: 35rem;
    @media screen and (max-width: 390px){
        min-width: 25rem;
    }
`