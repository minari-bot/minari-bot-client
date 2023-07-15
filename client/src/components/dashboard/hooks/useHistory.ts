import { useQuery } from "@tanstack/react-query";
import { BinanceHistoryData, UpbitHistoryData } from "../type";
import { queryKeys } from "../../../react-query/constants";
import { histroy } from "../../../apis/history";

export function useBinanceHistory(){
    const { data = [] } = useQuery<BinanceHistoryData>(
        [queryKeys.histoy, queryKeys.binance], 
        histroy.getBinanceOrderHistory,
        {
            retry: 0,
        });
    return data;
}
export function useUpbitHistory(){
    const { data = [] } = useQuery<UpbitHistoryData>(
        [queryKeys.histoy, queryKeys.upbit], 
        histroy.getUpbitOrderHistory,
        {
            retry: 0,
        }
        );
    return data;
}