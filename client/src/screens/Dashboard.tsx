import { motion } from "framer-motion"
import { useState } from "react";
import styled from "styled-components"
import SmallButton from "../components/common/SmallButton";
import ImgButton from "../components/common/ImgButton";
import binanceLogo from "../assets/img/binance_logo.svg.png"
import upbitLogo from "../assets/img/upbit_logo.png"
import { DAY_BUTTON, DAY_BUTTON_ENUM, EXCHANGE_BUTTON, EXCHANGE_BUTTON_ENUM } from "../components/dashboard/type";
import OverviewContainer from "../components/dashboard/OverviewContainer";
import HistoryContainer from "../components/dashboard/HistoryContainer";
import Header from "../components/common/Header";
import StrategyContainer from "../components/dashboard/StrategyContainer";
import { useMediaQueries } from "../components/hooks/useMediaQueries";
import { Helmet } from "react-helmet-async";

const mobileMode = {
    history : 'history',
    strategy : 'strategy',
}
export default function Dashboard(){
    const [exchangeSelect, setExchangeSelect] = useState<EXCHANGE_BUTTON>(EXCHANGE_BUTTON_ENUM.binance);
    const [daySelect, setDaySelect] = useState<DAY_BUTTON>(DAY_BUTTON_ENUM.week);
    const [modeSelect, setModeSelect] = useState(mobileMode.history);
    const { isPc } = useMediaQueries();
    return <>
        <Helmet><title>대시보드</title></Helmet>
        <Container>
                { isPc && <Header/> }
                    <>
                    <h1>대시보드</h1>
                    <SettingHeader>
                        <Buttons>
                            <ImgButton onClick={() => setExchangeSelect(EXCHANGE_BUTTON_ENUM.binance)} title={EXCHANGE_BUTTON_ENUM.binance} isSelect={exchangeSelect === EXCHANGE_BUTTON_ENUM.binance} img={binanceLogo}/>
                            <ImgButton onClick={() => setExchangeSelect(EXCHANGE_BUTTON_ENUM.upbit)} title={EXCHANGE_BUTTON_ENUM.upbit} isSelect={exchangeSelect === EXCHANGE_BUTTON_ENUM.upbit} img={upbitLogo}/>
                        </Buttons>
                        <Buttons>
                            <SmallButton onClick={() => setDaySelect(DAY_BUTTON_ENUM.week)} title="일주일" isSelect={daySelect === DAY_BUTTON_ENUM.week}/>
                            <SmallButton onClick={() => setDaySelect(DAY_BUTTON_ENUM.month)} title="이번 달" isSelect={daySelect === DAY_BUTTON_ENUM.month}/>
                            <SmallButton onClick={() => setDaySelect(DAY_BUTTON_ENUM.month3)} title="3개월" isSelect={daySelect === DAY_BUTTON_ENUM.month3}/>
                            <SmallButton onClick={() => setDaySelect(DAY_BUTTON_ENUM.month6)} title="6개월" isSelect={daySelect === DAY_BUTTON_ENUM.month6}/>
                        </Buttons>
                    </SettingHeader>
                    <OverviewContainer day={daySelect} exchangeSelect={exchangeSelect}/>
                    { !isPc &&  
                    <Buttons>
                        <SmallButton onClick={()=> setModeSelect(mobileMode.history)} title="내역" isSelect={modeSelect === mobileMode.history}/>
                        <SmallButton onClick={()=> setModeSelect(mobileMode.strategy)} title="구독 전략" isSelect={modeSelect === mobileMode.strategy}/>
                    </Buttons>}
                    <SubLayout>
                        { !isPc && modeSelect === mobileMode.history && <HistoryContainer exchange={exchangeSelect}/> }
                        { !isPc && modeSelect === mobileMode.strategy && <StrategyContainer exchange={exchangeSelect}/> }
                        {  isPc && <>
                            <HistoryContainer exchange={exchangeSelect}/>
                            <StrategyContainer exchange={exchangeSelect}/>
                            </>
                        }
                    </SubLayout>
                    </>
            </Container>
        </>
}

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    gap: 1.0rem;
    @media screen and (max-width: 1279px){
        padding-top: 7.5rem;
    }
`
const SubLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
`
const SettingHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    gap: 1.5rem;
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
`
const ChartWrapper = styled.div`
    height: 40rem;
    width: 15rem;
    border-radius: 35px;
    padding: 2rem 1.2rem;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
`
