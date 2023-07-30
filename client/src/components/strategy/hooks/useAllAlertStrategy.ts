import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { AlertStrategyData } from "../type";

export function useAllAlertStrategy(){
    const { data = [] } = useQuery<AlertStrategyData[]>(
        [queryKeys.alertStrategy], 
        strategy.getAllAlertStrategy,
        {
            retry: 0,
        });
    return data;    
}