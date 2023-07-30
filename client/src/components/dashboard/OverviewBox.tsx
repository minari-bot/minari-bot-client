import styled from "styled-components"
import {  makeRoundNumber } from "../../utils/makeString"
import { AiOutlineInfoCircle } from "react-icons/ai";

export interface Props{
    title : string,
    status : number,
    value : number,
    symbol : string,
}
export default function OverallStatBox({title, status, value, symbol} : Props){
    return <Container>
        <Header>
            <Title>{title || ""}</Title>
            <AiOutlineInfoCircle/>
        </Header>
        <Value>
        {makeRoundNumber(value || 0, 2) + symbol || ""}
        </Value>
        {
            status === 0?
            null
            :
            <Trend isUptrend={status > 0}>
                {status}%
                {status > 0? "↑" : "↓"}
            </Trend>
        }
    </Container>
}

const Container = styled.div`
    width: 16rem;
    height: 8rem;
    padding: 1.2rem 2rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    font-size: 1.2rem;
    background: ${props => props.theme.light.white};
    border-radius: 15px;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
    gap: 1.0rem;

`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Title = styled.div`
    font-weight: 400;
    
`
const Status = styled.div`
`
const Value = styled.div`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`
const Trend = styled.div<{isUptrend : boolean}>`
    border-radius: 1.5rem;
    color: ${props => props.isUptrend? props.theme.light.darkGreen : props.theme.light.red};
    background-color: ${props => props.isUptrend? props.theme.light.green : props.theme.light.pink};
    font-weight: bold;
    font-size: 1.1rem;
    min-width: 3.5rem;
    max-width: 4rem;
    padding: 0.3rem 0.5rem;
    text-align: center;
    letter-spacing: -0.5px;


    
`