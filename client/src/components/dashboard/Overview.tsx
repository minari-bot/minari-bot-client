import dayjs from "dayjs";
import { EXCHANGE } from "../../global/type";
import OverallStatBox from "./OverviewBox";
import { fallback, useBinanceOverview, useUpbitOverview } from "./hooks/useOverallStats";

interface Props{
    exchange: string
    diffDay: string | undefined,
}
export default function Overview({exchange, diffDay} : Props){
    const binanceData = useBinanceOverview();
    const upbitData = useUpbitOverview();
    const data = 
        ((exchange === EXCHANGE.binance) && binanceData)
        ||
        ((exchange === EXCHANGE.upbit) && upbitData)
        ||
        fallback
    return <>
        <OverallStatBox title="보유액" status={0} value={data.overview[0]?.totalMoney || 0} symbol={" " + data.currency}/>
        <OverallStatBox title="이익" status={0} value={data?.overview?.filter(data => dayjs(data.datetime).isAfter(diffDay)).map(data =>Number(data.realizedPnl)).reduce((a, b) => a+b, 0) || 0} symbol={" " + data.currency}/>
        <OverallStatBox title="거래량" status={0} value={(data?.transaction || 0) + (data?.startTransaction || 0)} symbol={"회"}/>
        <OverallStatBox title="승률" status={0} value={(data?.wins || 0) / (data?.transaction || 1) * 100} symbol={"%"}/>
    </>
}