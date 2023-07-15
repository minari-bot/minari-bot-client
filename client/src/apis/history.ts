import { HISTORY_ERROR_MESSAGE } from "../react-query/constants";
import axios, { AxiosError } from "axios";

export const histroy = {
    getBinanceOrderHistory : async () => {
        try{
            const res = await axios.get(`/api/history/all/BINANCE`);
            return res.data;    
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 403:   
                    throw { code: 403 };
                case 404:
                    throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND };
                case 500:
                    throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD };
            }
        }
    },
    getUpbitOrderHistory : async () => {
        try{
            const res = await axios.get(`/api/history/all/UPBIT`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 403:
                    throw { code: 403 };
                case 404:
                    throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND };
                case 500:
                    throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD };
            }
        }
    }
    
}