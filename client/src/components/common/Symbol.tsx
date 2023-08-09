import {ReactComponent as Eth} from '../../assets/svg/symbol/eth.svg';
import {ReactComponent as Binance} from '../../assets/svg/symbol/binance.svg';
import {ReactComponent as TradingView} from '../../assets/svg/symbol/tradingview.svg';
import {ReactComponent as Upbit} from '../../assets/svg/symbol/upbit.svg'
export default function Symbol({name} : {name : string}){  
    const lowerName = name.toLowerCase();
    return <>
        {lowerName === 'eth' && <Eth/>}
        {lowerName === 'binance' && <Binance/>}
        {lowerName === 'tradingview' && <TradingView/>}
        {lowerName === 'upbit' && <Upbit/>}
    </>
}
