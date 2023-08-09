export interface AlertStrategyData{
    _id: string,
    userId: string,
    strategyName: string,
    exchange: string,
    symbol: string,
    strategyUrl: string,
    leverage: number,
    transaction: number,
    profitPercent: number,
    winRate: number,
    subscribers: string[]
    createdAt: string,
    updatedAt: string,
}