import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { useUser } from "../../../hooks/useUser";
import { admin } from "../../../apis/admin";
import { AlertStrategyData } from "../../strategy/type";

export function useAllAlertStrategy(){
    const {user} = useUser();
    const { data = [], refetch } = useQuery<AlertStrategyData[]>(
        [queryKeys.alertStrategy], 
        () => admin.getAllAlertStrategy(user),
        {
            retry: 0,
        });
    return { data, refetch };    
}