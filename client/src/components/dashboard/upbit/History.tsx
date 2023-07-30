import OrderInfo from "../OrderInfo";
import { useUpbitHistory } from "../hooks/useHistory";

export default function UpbitHistory(){
  const historyList = useUpbitHistory();
  return <>{historyList[0] && historyList[0].tradesDataArr?.map((item, i) => <OrderInfo  key={item.orderId + i} datetime={item.datetime || ""} symbol={item.symbol || ""} side={item.side || ""} leverage={0} price={Number(item.price) || 0} quoteQty={Number(item.quoteQty)} realizedPnl={Number(item.realizedPnl) || 0}/>)}</>
}
