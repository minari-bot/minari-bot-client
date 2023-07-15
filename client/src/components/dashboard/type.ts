export interface BinanceHistoryData{
    [key: number] : {
        _id: string,
        exchange: string,
        createdAt: string,
        updatedAt: string,
        tradesDataArr: {
            strategyId: string,
            exchange: string,
            label: string,
            symbol: string,
            datetime: string,
            orderId: string,
            side: string,
            leverage: number,
            price: number,
            quoteQty: number,
            commission: number,
            realizedPnl: number,
            message: string,
        }[],
    }
}
export interface UpbitHistoryData{
    [key : number] : {
        _id: string,
        exchange: string,
        createdAt: string,
        updatedAt: string,
        tradesDataArr: {
            strategyId: string,
            exchange: string,
            label: string,
            symbol: string,
            datetime: string,
            orderId: string,
            side: string,
            price: string,
            quoteQty: string,
            commission: string,
            realizedPnl: string,
            message: string,
        }[]
    }
}
export interface StrategyData {
    strategyId : string,
    exchange: string,
    label: string,
    userId: string,
    symbol : string,
    strategyName : string,
    strategyUrl: string,
    leverage: number,
    profitPercent : number,
    winRate : number,
}
export interface OverviewData{
	startTransaction: number,
	_id: string,
	userId: string,
	transaction: number,
	wins: number,
	overview: 
    {
        realizedPnl: number,
        totalMoney: number,
        datetime: string
    }[]
	createdAt: string,
	updatedAt: string,
	__v: number,
	label: string,
	currency: string
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