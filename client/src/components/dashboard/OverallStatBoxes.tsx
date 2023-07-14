import { useQuery } from "react-query";
import OverallStatBox from "./OverallStatBox";
import { DAY_BUTTON, DAY_BUTTON_ENUM, binanceHistory, upbitHistory } from "./dashboardType";
import { AxiosError } from "axios";
import { EXCHANGE_LABEL_ENUM } from "../../global/type";
import { histroy } from "../../apis/history";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { makeCurrencyString } from "../../utils/makeCurrencyString";

interface Props{
    day: DAY_BUTTON
}
export default function OverallStatBoxes({day} : Props){
    const getDiffDay = () => {
        const today = dayjs();
        if(day === DAY_BUTTON_ENUM.week) return today.subtract(7, "day").format();
        else if (day === DAY_BUTTON_ENUM.month) return today.subtract(1, "month").format();
        else if (day === DAY_BUTTON_ENUM.month3) return today.subtract(3, "month").format();
        else if (day === DAY_BUTTON_ENUM.month6) return today.subtract(6, "month").format();
    }
    // const getTotalProfit = () => {
    //     let sum = 0;  
    //     binanceData?.tradesDataArr.filter(data => dayjs(data.datetime).isAfter(diffDay)).map(data => sum += Number(data.realizedPnl));
    //     upbitData?.tradesDataArr.filter(data => dayjs(data.datetime).isAfter(diffDay)).map(data => sum += Number(data.realizedPnl));
    //     return sum;
    // }
    // const [diffDay, setDiffDay] = useState(() => {
    //     return getDiffDay();
    // });
    // useEffect(() => {
    //     setDiffDay(getDiffDay());
    // }, [day]);

    // const { data : binanceData, isLoading : isBinanceLoading, isError : isBinanceError, error : BinanceError  } = useQuery<binanceHistory>(["history", EXCHANGE_LABEL_ENUM.binance] , () => histroy.getOrderHistoryBinance(EXCHANGE_LABEL_ENUM.binance),{
    //     onError: (err) => {
    //       const error = err as AxiosError;
    //       console.log(error);
    //     },
    //     onSuccess: (recevied) => {
    //     }
    //   });
    // const { data : upbitData, isLoading : isUpbitLoading, isError : isUpbitError, error: upbitError } = useQuery<upbitHistory>(["history", EXCHANGE_LABEL_ENUM.upbit] , () => histroy.getOrderHistoryUpbit(EXCHANGE_LABEL_ENUM.upbit),{
    // onError: (err) => {
    //     const error = err as AxiosError;
    //     console.log(error);
    // },
    // onSuccess: (recevied) => {
    // }
    // });

    return <>   
        <OverallStatBox title="보유액" status="6.5" value={0} symbol={"   /USD"}></OverallStatBox>
        <OverallStatBox title="이익" status="-10" value={0} symbol={"  /USD"}></OverallStatBox>
        <OverallStatBox title="거래량" status="10" value={0} symbol={"  /USD"}></OverallStatBox>
        <OverallStatBox title="승률" status="5" value={0} symbol={"  /USD"}></OverallStatBox>
    </>
}