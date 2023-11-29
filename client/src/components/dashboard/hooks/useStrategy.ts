import { useSuspenseQuery } from "@tanstack/react-query";
import { StrategyData } from "../type";
import { strategy } from "../../../apis/strategy";
import { queryKeys } from "../../../react-query/constants";
import { useUser } from "../../hooks/useUser";

export function useBinanceStrategy(){
    const {user} = useUser();
    const { data = []} = useSuspenseQuery<StrategyData[]>({
        queryKey: [queryKeys.strategy, queryKeys.binance],
        queryFn: () => strategy.getBinanceSubscribeItem(user),
        retry: 0,
    });
    return { data, length : data.length }
}
export function useUpbitStrategy(){
    const {user} = useUser();
    const { data = []} = useSuspenseQuery<StrategyData[]>({
        queryKey: [queryKeys.strategy, queryKeys.upbit],
        queryFn: () => strategy.getUpbitSubscribeItem(user),
        retry: 0,
    });
    return { data, length : data.length };
}