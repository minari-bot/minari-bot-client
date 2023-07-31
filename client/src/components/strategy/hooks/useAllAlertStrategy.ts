import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { AlertStrategyData } from "../type";
import { useUser } from "../../../hooks/useUser";

export function useAllAlertStrategy(){
    const {user} = useUser();
    const { data = [] } = useQuery<AlertStrategyData[]>(
        [queryKeys.alertStrategy], 
        () => strategy.getAllAlertStrategy(user),
        {
            retry: 0,
        });
    return data;    
}