export interface userInfo {
    email : string,
    name : string,
}
export const EXCHANGE_ENUM = {
  binance: 'BINANCE',
  upbit: 'UPBIT'
} as const;
export type EXCHANGE = typeof EXCHANGE_ENUM[keyof typeof EXCHANGE_ENUM];

export interface CustomError {
  code : number,
  message: string
}