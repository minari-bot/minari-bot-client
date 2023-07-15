import { useQuery } from "@tanstack/react-query";
import { StrategyData } from "../type";
import { strategy } from "../../../apis/strategy";
import { queryKeys } from "../../../react-query/constants";

export function useBinanceStrategy(){
    const { data = []} = useQuery<StrategyData[]>(
        [queryKeys.strategy, queryKeys.binance], 
        () => strategy.getBinanceSubscribeItem(),
        {
            retry: 0,
    });
    return { data, length : data.length }
}
export function useUpbitStrategy(){
    const { data = []} = useQuery<StrategyData[]>(
        [queryKeys.strategy, queryKeys.upbit], 
        () => strategy.getUpbitSubscribeItem(),{
            retry: 0,
    });
    return { data, length : data.length };
}