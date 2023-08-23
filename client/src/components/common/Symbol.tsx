import {ReactComponent as Eth} from '../../assets/svg/symbol/eth.svg';
import {ReactComponent as Binance} from '../../assets/svg/symbol/binance.svg';
import {ReactComponent as TradingView} from '../../assets/svg/symbol/tradingview.svg';
import {ReactComponent as Upbit} from '../../assets/svg/symbol/upbit.svg'
import {ReactComponent as Btc} from '../../assets/svg/symbol/btc.svg'
import styled from 'styled-components';

export default function Symbol({name} : {name : string}){  
    const lowerName = name.toLowerCase();
    return <Wrapper>
        {lowerName === 'btc' && <Btc/>}
        {lowerName === 'eth' && <Eth/>}
        {lowerName === 'binance' && <Binance/>}
        {lowerName === 'tradingview' && <TradingView/>}
        {lowerName === 'upbit' && <Upbit/>}
    </Wrapper>
}
const Wrapper = styled.div`
    svg{
        width: 2rem;
        height: 2rem;
    }
`