import StrategyBox from "../StrategyBox";
import { StrategyBoxSkeleton } from "../skeletons/StrategyBoxSkeleton";
import { useEffect } from "react";
import { useBinanceStrategy } from "../hooks/useStrategy";

export default function BinanceStrategy({setCount} : {setCount : React.Dispatch<React.SetStateAction<number>>}){
    const { data, length } = useBinanceStrategy();
    useEffect(() => {
      setCount(length);
    }, [length, setCount]);
    return  data? <>{data.map((item, i) => <StrategyBox key={item.strategyId + i} symbol={item.symbol} leverage={item.leverage} strategyName={item.strategyName} strategyUrl={item.strategyUrl} winRate={item.winRate} profitPercent={item.profitPercent}/>)}</>
            :
            <>{Array(5).fill(0).map((item, i) => <StrategyBoxSkeleton key={i}/>)}</>
}