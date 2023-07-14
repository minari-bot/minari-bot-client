import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { EXCHANGE_LABEL_ENUM } from "../../global/type";
import { histroy } from "../../apis/history";
import OrderInfo from "./OrderInfo";
import { binanceHistory } from "./dashboardType";

export default function BinanceHistory(){
    const { data, isLoading, isError, error } = useQuery<binanceHistory>(["history", EXCHANGE_LABEL_ENUM.binance] , () => histroy.getOrderHistory(EXCHANGE_LABEL_ENUM.binance),{
        onError: (err) => {
          const error = err as AxiosError;
          console.log(error);
        },
        onSuccess: (recevied) => {
        }
      });
    
    return !isLoading && data ? <>
            {data?.tradesDataArr?.map((item, i) => <OrderInfo key={item.datetime + i} tradeData={item}/>)}
            </>
          :
          <div>loading</div>
}