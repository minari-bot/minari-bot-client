import styled from "styled-components";
import Header from "../components/common/Header";
import ImgButton from "../components/common/ImgButton";
import { useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import KeyList from "../components/api/KeyList";
import { EXCHANGE, EXCHANGE_ENUM } from "../global/type";
import KeyRegisterForm from "../components/api/KeyRegisterForm";
import KeyInfo from "../components/api/KeyInfo";

export default function Api(){
    const [exchangeSelect, setExchangeSelect] = useState<EXCHANGE>(EXCHANGE_ENUM.binance);
    const [selectedKeyId, setSelectedKeyId] = useState<null | string>(null);
    const [isKeyAddMode, setKeyAddMode] = useState(false);
    return <Container>
        <Header/>
        <Icons>
            <ImgButton onClick={() => setExchangeSelect(EXCHANGE_ENUM.binance)} title={EXCHANGE_ENUM.binance} isSelect={exchangeSelect === EXCHANGE_ENUM.binance} img={binanceLogo}/>
            <ImgButton onClick={() => setExchangeSelect(EXCHANGE_ENUM.upbit)} title={EXCHANGE_ENUM.upbit} isSelect={exchangeSelect === EXCHANGE_ENUM.upbit} img={upbitLogo}/>
        </Icons>
        <Main>
            <KeyList exchange={exchangeSelect} setSelectedKeyId={setSelectedKeyId} setKeyAddMode={setKeyAddMode}/>
            <SideWrapper>
                { isKeyAddMode ? 
                    <KeyRegisterForm exchange={exchangeSelect}/>
                    :
                    <KeyInfo labelName={"label"} transanctions={0} balance={0} isConnect={false}/>
                }
            </SideWrapper>
        </Main>
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
