import StrategyBox from "../StrategyBox";
import { StrategyBoxSkeleton } from "../skeletons/StrategyBoxSkeleton";
import { useUpbitStrategy } from "../hooks/useStrategy";
import { Suspense, useEffect } from "react";

export default function UpbitStrategy({setCount} : {setCount : React.Dispatch<React.SetStateAction<number>>}){
    const { data, length } = useUpbitStrategy();
    useEffect(() => {
        setCount(length);
      }, [length, setCount]);
    return <>{data.map((item, i) => <StrategyBox key={item.strategyId + i} symbol={item.symbol} leverage={item.leverage} strategyName={item.strategyName} strategyUrl={item.strategyUrl} winRate={item.winRate} profitPercent={item.profitPercent}/>)}</>
      
}