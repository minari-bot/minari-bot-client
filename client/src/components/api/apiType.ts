import { EXCHANGE } from "../../global/type";

export interface apiKeyFormValue {
    exchange: string,
    label: string,
    apikey: string,
    secretkey: string,
}
export interface apiKeyCheckValue{
    exchange: string,
    apikey: string,
    secretkey: string,
}
export interface apiKeyInfo{
    _id: string,
    exchange: string,
    label: string,
    apikey: string,
    userId: string,
}
export interface apiKeyInfoList extends Array<apiKeyInfo>{}

export interface apiKeyOverview{
	balance: number,
	currency: string
	transaction: number,
	connect: false,
	message: string,
}