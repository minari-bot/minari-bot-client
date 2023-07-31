import OrderInfo from "../OrderInfo";
import { useBinanceHistory } from "../hooks/useHistory";

export default function BinanceHistory(){
  const data = useBinanceHistory();
    return <>{data && data[0].tradesDataArr?.map((item, i) => <OrderInfo  key={item.orderId + i} datetime={item.datetime || ""} symbol={item.symbol || ""} side={item.side || ""} leverage={item.leverage || 0} price={item.price || 0} quoteQty={item.quoteQty || 0} realizedPnl={item.realizedPnl || 0}/>)}</>
}