import OverallStatBox from "./OverviewBox";
import { DAY_BUTTON, DAY_BUTTON_ENUM, EXCHANGE_BUTTON, EXCHANGE_BUTTON_ENUM } from "./type";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { OverallStatBoxSkeleton } from "./skeletons/OverallStatBoxSkeleton";
import { useBinanceOverview, useUpbitOverview } from "./hooks/useOverallStats";

interface Props{
    day: DAY_BUTTON,
    exchangeSelect : EXCHANGE_BUTTON
}
export default function OverallStatBoxes({day, exchangeSelect} : Props){
    const [values, setValues] = useState({
        totalMoney: 0,
        pnl : 0,
        transactions: 0,
        winRate: 0,
        currency : "",
    })
    const getDiffDay = () => {
        const today = dayjs();
        if(day === DAY_BUTTON_ENUM.week) return today.subtract(7, "day").format();
        else if (day === DAY_BUTTON_ENUM.month) return today.subtract(1, "month").format();
        else if (day === DAY_BUTTON_ENUM.month3) return today.subtract(3, "month").format();
        else if (day === DAY_BUTTON_ENUM.month6) return today.subtract(6, "month").format();
    }
    const [diffDay, setDiffDay] = useState(() => {
        return getDiffDay();
    });
    const binanceData = useBinanceOverview();
    const upbitData = useUpbitOverview();
    useEffect(() => {
        setDiffDay(getDiffDay());
        if(exchangeSelect === EXCHANGE_BUTTON_ENUM.binance)
        {
            setValues(prev => ({
                ...prev,
                totalMoney : binanceData?.overview[0]?.totalMoney || 0,
                pnl: binanceData?.overview?.filter(data => dayjs(data.datetime).isAfter(diffDay)).map(data =>Number(data.realizedPnl)).reduce((a, b) => a+b, 0) || 0,
                transactions: (binanceData?.transaction || 0) + (binanceData?.startTransaction || 0),
                winRate: (binanceData?.wins || 0) / (binanceData?.transaction || 1) * 100,
                currency: binanceData?.currency || "",
            }))
        }
        if(exchangeSelect === EXCHANGE_BUTTON_ENUM.upbit)
            setValues(prev => ({
                ...prev,
                totalMoney : upbitData?.overview[0]?.totalMoney || 0,
                pnl: upbitData?.overview?.filter(data => dayjs(data.datetime).isAfter(diffDay)).map(data =>Number(data.realizedPnl)).reduce((a, b) => a+b, 0) || 0,
                transactions: (upbitData?.transaction || 0) + (upbitData?.startTransaction || 0),
                winRate: (upbitData?.wins || 0) / (upbitData?.transaction || 1) * 100,
                currency: upbitData?.currency || "",
            }))
    }, [day, exchangeSelect, binanceData, upbitData]);

    if(!binanceData || !upbitData)
        return <>
            <OverallStatBoxSkeleton/>
            <OverallStatBoxSkeleton/>
            <OverallStatBoxSkeleton/>
            <OverallStatBoxSkeleton/>
        </>
    else return <>
            <OverallStatBox title="보유액" status={0} value={values.totalMoney} symbol={" " + values.currency}/>
            <OverallStatBox title="이익" status={0} value={values.pnl} symbol={" " + values.currency}/>
            <OverallStatBox title="거래량" status={0} value={values.transactions} symbol={"회"}/>
            <OverallStatBox title="승률" status={0} value={values.winRate} symbol={"%"}/>
        </>
}