import { apiKeyInfoList } from "../apiType";
import { queryKeys } from "../../../react-query/constants";
import { apiKey } from "../../../apis/apiKey";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
export default function useKeyList(){
    const {user} = useUser();
    const { data = [], refetch } = useQuery<apiKeyInfoList>([queryKeys.keyList], () => apiKey.getAllApiKeys(user),{});
    return { data, refetch };
}