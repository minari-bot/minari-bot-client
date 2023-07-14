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
interface apiKeyInfo{
    _id: string,
    exchange: EXCHANGE,
    label: string,
    apikey: string,
    userId: string,
}
export interface apiKeyInfoList extends Array<apiKeyInfo>{}