import StrategyBox from "./StrategyBox";
import { useOpenStrategy } from "./hooks/useOpenStrategy";
import { StrategyBoxSkeleton } from "./skeletons/StrategyBoxSkeleton";
import AsyncWrapper from "../error/AsyncWrapper";
import ErrorComponent from "../error/ErrorComponent";

export default function StrategyContainer(){
    const { data } = useOpenStrategy();
    const suspenseFallback = <>{Array(6).fill(0).map((t, i) => <StrategyBoxSkeleton key={i}/>)}</>
    return <>
        <AsyncWrapper suspenseFallback={suspenseFallback}>
            { data.map(( item, i ) => <StrategyBox key={item._id} info={item} />) }
        </AsyncWrapper>
    </>
}