import { apiKeyInfoList } from "../apiType";
import { queryKeys } from "../../../react-query/constants";
import { apiKey } from "../../../apis/apiKey";
import { useQuery } from "@tanstack/react-query";
export default function useKeyList(){
    const { data = [], refetch } = useQuery<apiKeyInfoList>([queryKeys.keyList], apiKey.getAllApiKeys,{});
    return { data, refetch };
}