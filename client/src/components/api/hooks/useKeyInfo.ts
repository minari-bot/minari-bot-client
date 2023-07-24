import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { apiKey } from "../../../apis/apiKey";
import { apiKeyOverview } from "../apiType";


export function useKeyInfo(id : string){
    const { data } = useQuery<apiKeyOverview>([queryKeys.keyInfo, id], () => apiKey.getApiKey(id));
    return data;
}