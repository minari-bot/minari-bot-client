import { useSuspenseQuery } from "@tanstack/react-query";
import { BinanceHistoryData, UpbitHistoryData } from "../type";
import { queryKeys } from "../../../react-query/constants";
import { histroy } from "../../../apis/history";
import { useUser } from "../../hooks/useUser";

export function useBinanceHistory(){
    const {user} = useUser();
    const { data = [] } = useSuspenseQuery<BinanceHistoryData>({
        queryKey: [queryKeys.histoy, queryKeys.binance],
        queryFn: () => histroy.getBinanceOrderHistory(user),
        retry: 0,
    });
    return data;
}
export function useUpbitHistory(){
    const {user} = useUser();
    const { data = [] } = useSuspenseQuery<UpbitHistoryData>({
        queryKey: [queryKeys.histoy, queryKeys.upbit],
        queryFn: () => histroy.getUpbitOrderHistory(user),
        retry: 0,
    });
    return data;
}