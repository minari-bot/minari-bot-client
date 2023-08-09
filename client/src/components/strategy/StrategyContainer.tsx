import { Suspense } from "react";
import StrategyBox from "./StrategyBox";
import { useOpenStrategy } from "./hooks/useOpenStrategy";
import { StrategyBoxSkeleton } from "./skeletons/StrategyBoxSkeleton";

export default function StrategyContainer(){
    const {data} = useOpenStrategy();
    return <>
        <Suspense fallback={<>{Array(6).fill(0).map((t, i) => <StrategyBoxSkeleton key={i}/>)}</>}>
            { data.map(( item, i ) => <StrategyBox key={item._id} info={item} />) }
        </Suspense>
    </>
}