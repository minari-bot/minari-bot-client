import { apiKeyInfoList } from "../apiType";
import { queryKeys } from "../../../react-query/constants";
import { apiKey } from "../../../apis/apiKey";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useUser } from "../../hooks/useUser";
export default function useKeyList(){
    const {user} = useUser();
    const { data = [], refetch } = useSuspenseQuery<apiKeyInfoList>({
        queryKey: [queryKeys.keyList],
        queryFn: () => apiKey.getAllApiKeys(user),
    });
    return { data, refetch };
}