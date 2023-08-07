import StrategyBox from "./StrategyBox";
import { useAllAlertStrategy } from "./hooks/useAllAlertStrategy";

export default function StrategyContainer(){
    const {data} = useAllAlertStrategy();
    return <>
        { data.map(( item ) => <StrategyBox key={item._id} info={item} />) }
    </>
}