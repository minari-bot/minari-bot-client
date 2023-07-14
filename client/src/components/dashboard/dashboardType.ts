export interface binanceHistory{
    _id: string,
    label: string,
    createdAt: string,
    updatedAt: string,
    tradesDataArr: binanceTradeData[],
}
export interface binanceTradeData{
    symbol: string,
    datetime: string,
    orderId: string,
    side: string,
    price: string,
    quoteQty: string,
    commission: string,
    realizedPnl: string,
    message: string,
}
export interface upbitHistory{
    _id: string,
    label: string
    tradesDataArr: upbitTradeData[],
}
export interface upbitTradeData{
    symbol:string,
    datetime:string,
    orderId:string,
    side:string,
    price: string,
    quoteQty: string,
    commission: string,
    realizedPnl: string,
    message: string
}
export const EXCHANGE_BUTTON_ENUM = {
    binance: 'binance',
    upbit: 'upbit'
  } as const;
export type EXCHANGE_BUTTON = typeof EXCHANGE_BUTTON_ENUM[keyof typeof EXCHANGE_BUTTON_ENUM];
export const DAY_BUTTON_ENUM = {
    week: 'week',
    month: 'month',
    month3: 'month3',
    month6: 'month6'
  } as const;
export type DAY_BUTTON = typeof DAY_BUTTON_ENUM[keyof typeof DAY_BUTTON_ENUM];