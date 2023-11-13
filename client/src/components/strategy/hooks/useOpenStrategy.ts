import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { openStrategyData } from "../type";

export function useOpenStrategy(){
    const { data = [], refetch } = useQuery<openStrategyData[]>({
        queryKey: [queryKeys.openStrategy], 
        queryFn: () => strategy.getOpenStrategy(),
        retry: 0,
    });
    return { data, refetch };    
}