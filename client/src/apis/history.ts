import { CustomErrorClass } from "../global/error";
import { HISTORY_ERROR_MESSAGE } from "../react-query/constants";
import axios from "axios";

export const histroy = {
    getBinanceOrderHistory : async () => {
        try{
            const res = await axios.get(`/api/history/all/BINANCE`);
            return res.data;    
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_FOUND, 400); //empty
                    case 403: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_LOAD, 403);
                    case 404: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_FOUND, 404);
                    case 500: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_LOAD, 500);
                }
            }
    },
    getUpbitOrderHistory : async () => {
        try{
            const res = await axios.get(`/api/history/all/UPBIT`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_LOAD, 400);
                    case 403: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_LOAD, 403);
                    case 404: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_FOUND, 404);
                    case 500: throw new CustomErrorClass(HISTORY_ERROR_MESSAGE.CANNOT_LOAD, 500);
                }
        }
    }
    
}