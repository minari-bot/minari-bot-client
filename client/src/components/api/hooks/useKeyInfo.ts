import { useSuspenseQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/constants";
import { apiKey } from "../../../apis/apiKey";
import { apiKeyOverview } from "../apiType";

const fallback= {
    balance: 0,
	currency: "",
	transaction: 0,
	connect: false,
	message: "string",
}
export function useKeyInfo(id : string){
    const { data = fallback } = useSuspenseQuery<apiKeyOverview>({
		queryKey: [queryKeys.keyInfo, id],
		queryFn: () => apiKey.getApiKey(id),
	});
    return data;
}