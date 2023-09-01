import { useEffect } from "react";
import OrderInfo from "../OrderInfo";
import { useBinanceHistory } from "../hooks/useHistory";

interface Props{
  setCount: React.Dispatch<React.SetStateAction<number>>
}
export default function BinanceHistory({setCount} : Props){
  const data = useBinanceHistory();
  useEffect(() => {
    setCount(data[0]?.tradesDataArr?.length || 0);
  }, [data, setCount]);
  return <>{data[0] && data[0].tradesDataArr?.map((item, i) => <OrderInfo  key={item.orderId + i} datetime={item.datetime || ""} symbol={item.symbol || ""} side={item.side || ""} leverage={item.leverage || 0} price={item.price || 0} quoteQty={item.quoteQty || 0} realizedPnl={item.realizedPnl || 0}/>)}</>
}