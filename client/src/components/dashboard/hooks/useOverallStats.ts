import { useQuery } from "@tanstack/react-query";
import { overview } from "../../../apis/overview";
import { OverviewData } from "../type";
import { queryKeys } from "../../../react-query/constants";

const fallback : OverviewData = {
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
    const { data = fallback } = useQuery<OverviewData>([queryKeys.overview, queryKeys.binance] , () => overview.getBinanceOverview());
    return data;
}
export function useUpbitOverview(){
    const { data = fallback } = useQuery<OverviewData>([queryKeys.overview, queryKeys.upbit] , () => overview.getUpbitOverview());
    return data;
}
