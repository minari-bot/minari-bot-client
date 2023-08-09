import styled from "styled-components"
import ProfileLogo from "../common/ProfileLogo"
import Symbol from "../common/Symbol"
import ReverageMag from "../common/ReverageMag"
import SubmitButton from "../common/SmallSubmitButton"
import { openStrategyData } from "./type"
import { makeSymbolWithoutCurrency } from "../../utils/makeString"
import { useState } from "react"
import KeySelect from "./KeySelect"
import AsyncWrapper from "../error/AsyncWrapper"
import { StrategyBoxSkeleton } from "./skeletons/StrategyBoxSkeleton"

interface Props{
    info : openStrategyData,
}
export default function StrategyBox({info} : Props){
    const [keySelectUI, setKeySelectUI] = useState(false);
    const onClick = () => {
        setKeySelectUI(true);
    }
    return keySelectUI?
            <AsyncWrapper suspenseFallback={<StrategyBoxSkeleton/>} errorFallback={<StrategyBoxSkeleton/>}>
                <KeySelect exchange={info?.exchange?.toLocaleLowerCase()} setKeySelectUI={setKeySelectUI}/>
            </AsyncWrapper>
            :
            <Container>
                <Header>
                    <ProfileInfo>
                        <ProfileLogo img={""}/>
                        <Author>Minari Trading</Author>
                    </ProfileInfo>
                    <Logos>
                        <Symbol name={info.exchange}/>
                        <a target="_blank" rel="noreferrer" href={info.strategyUrl}><Symbol name="tradingview"/></a>
                    </Logos>
                </Header>
                <Contents>
                    <Content>
                        <SymbolInfo>
                            <Symbol name={makeSymbolWithoutCurrency(info.symbol)}/>
                            <SymbolName>{info.symbol}</SymbolName>
                            <ReverageMag value={info.leverage}/>
                        </SymbolInfo>
                        <Title>
                            {info.strategyName}
                        </Title>
                    </Content>
                    <Content>
                        <InfoWrapper>
                            <Info>
                                <Label>수익률</Label>
                                <Value>{info.profitPercent}%</Value>
                            </Info>
                            <Info>
                                <Label>승률</Label>
                                <Value>{info.winRate}%</Value>
                            </Info>
                            <Info>
                                <Label>거래량</Label>
                                <Value>{info.transaction}</Value>
                            </Info>
                        </InfoWrapper>
                    </Content>
                </Contents>
                <Footer>
                    <Follower>
                        <span>팔로워</span>
                        <SmallValue>{info.followers}</SmallValue>
                    </Follower>
                    <SubmitButton width={55} title="구독"  onClick={onClick}/>
                </Footer>
            </Container>
}

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.3fr;
    width: 40rem;
    height: 17rem;
    border-radius: 15px;
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
    padding: 1rem  2rem;
    background-color: ${props => props.theme.light.white};
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    img {
        width: 3rem;
        height: 3rem;
    }
`
const Logos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.75rem;
    svg{
        width: 2.7rem;
        height: 2.7rem;
    }
`
const Author = styled.h3`
    font-size: 1.4rem;
`
const Contents = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr;
    border-top: 1px solid ${props => props.theme.light.borderGray};
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`
const SymbolInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
const SymbolName = styled.h3`
    font-weight: 400;
    font-size:1.2rem;
` 
const Title = styled.h2`
`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > div:not(:last-of-type){
        border-right: 1px solid ${props => props.theme.light.borderGray};
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1.5rem;
`
const Label = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
`
const Value = styled.div`
    font-size: 1.4rem;
`
const SmallValue = styled.span`
    font-weight: 600;
`
const Follower = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
`
