import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { strategy } from "../../../apis/strategy";
import { useUser } from "../../hooks/useUser";
import { admin } from "../../../apis/admin";
import { AlertStrategyData } from "../type";

export function useAllAlertStrategy(){
    const {user} = useUser();
    const { data = [], refetch } = useQuery<AlertStrategyData[]>({
        queryKey: [queryKeys.alertStrategy],
        queryFn: () => admin.getAllAlertStrategy(user),
        retry: 0,
    })
    return { data, refetch };    
}