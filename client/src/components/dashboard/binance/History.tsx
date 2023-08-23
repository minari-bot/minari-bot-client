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
  // return <>{data[0] && data[0].tradesDataArr?.map((item, i) => <OrderInfo  key={item.orderId + i} datetime={item.datetime || ""} symbol={item.symbol || ""} side={item.side || ""} leverage={item.leverage || 0} price={item.price || 0} quoteQty={item.quoteQty || 0} realizedPnl={item.realizedPnl || 0}/>)}</>
  return <>{Array(10).fill(0).map((item, i) => <OrderInfo key={i} datetime="2023-08-20:20:20" symbol="BTC/USDT" side="buy" leverage={3} price={1010231} quoteQty={11} realizedPnl={0} />)}</>
}