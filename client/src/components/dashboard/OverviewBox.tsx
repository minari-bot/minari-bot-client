import styled from "styled-components"
import {  makeRoundNumber } from "../../utils/makeString"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useMediaQueries } from "../hooks/useMediaQueries";

export interface Props{
    title : string,
    status : number,
    value : number,
    symbol : string,
}
export default function OverallStatBox({title, status, value, symbol} : Props){
    const { isPc, isMobile } = useMediaQueries();
    return <Container>
        <Header>
            <Title>{title || ""}</Title>
            {!isMobile && <AiOutlineInfoCircle/>}
        </Header>
        <Value> {makeRoundNumber(value || 0, 2) + symbol || ""}</Value>
        { status !== 0 &&
        <Trend isUptrend={status > 0}>
            {status}%
            {status > 0? "↑" : "↓"}
        </Trend> }
    </Container>
}

export const Container = styled.div`
    min-width: 13rem;
    max-width: 16rem;
    height: 8rem;
    padding: 1.2rem 2rem;
    display: grid;
    grid-template-rows: 1fr 1.5fr 1fr;
    font-size: 1.2rem;
    background: ${props => props.theme.light.white};
    border-radius: 15px;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
    gap: 0.2rem;
    @media screen and (max-width: 767px){
        padding: 1.2rem 2rem;
        height: 7.5rem;
        max-width: 14rem;

    }
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Title = styled.div`
    font-weight: 400;
`
const Value = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    @media screen and (max-width: 767px){ 
        font-size: 1.2rem;
    }
`
const Trend = styled.div<{isUptrend : boolean}>`
    border-radius: 1.5rem;
    color: ${props => props.isUptrend? props.theme.light.darkGreen : props.theme.light.red};
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    text-align: right;
    letter-spacing: -0.5px;
    @media screen and (max-width: 767px){
        width: inherit;
    }
    
`