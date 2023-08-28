export interface openStrategyData{
    _id: string
    strategyId: string,
    strategyName: string,
    exchange: string,
    symbol: string,
    strategyUrl: string,
    leverage: number,
    transaction: number,
    profitPercent: number,
    winRate: number,
    followers: number,
    subscribing: boolean,
}