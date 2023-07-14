export interface userInfo {
    email : string,
    name : string,
}
export const EXCHANGE_LABEL_ENUM = {
    binance: 'BinanceTestApi',
    upbit: 'UpbitTestApi'
  } as const;
export type EXCHANGE_LABEL = typeof EXCHANGE_LABEL_ENUM[keyof typeof EXCHANGE_LABEL_ENUM];

export const EXCHANGE_ENUM = {
  binance: 'BINANCE',
  upbit: 'UPBIT'
} as const;
export type EXCHANGE = typeof EXCHANGE_ENUM[keyof typeof EXCHANGE_ENUM];