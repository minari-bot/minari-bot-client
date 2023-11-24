import { useQuery } from "@tanstack/react-query";
import { overview } from "../../../apis/overview";
import { OverviewData } from "../type";
import { queryKeys } from "../../../react-query/constants";
import { useUser } from "../../hooks/useUser";

export const fallback : OverviewData = {
    startTransaction: 0,
	_id: "",
	userId: "",
	transaction: 0,
	wins: 0,
	overview: [],
	createdAt: "",
	updatedAt: "",
	__v: 0,
	label: "",
	currency: ""
}
export function useBinanceOverview(){
	const {user} = useUser();
    const { data = fallback } = useQuery<OverviewData>({
		queryKey: [queryKeys.overview, queryKeys.binance],
		queryFn: () => overview.getBinanceOverview(user),
	});
    return data;
}
export function useUpbitOverview(){
	const {user} = useUser();
    const { data = fallback } = useQuery<OverviewData>({
		queryKey: [queryKeys.overview, queryKeys.upbit],
		queryFn: () => overview.getUpbitOverview(user),
	});
    return data;
}
