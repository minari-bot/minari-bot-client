import { useSuspenseQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { openStrategyData } from "../type";

export function useOpenStrategy(){
    const { data = [], refetch } = useSuspenseQuery<openStrategyData[]>({
        queryKey: [queryKeys.openStrategy], 
        queryFn: () => strategy.getOpenStrategy(),
    });
    return { data, refetch };    
}