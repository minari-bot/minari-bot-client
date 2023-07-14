import axios, { AxiosError } from "axios";
import { HISTORY_ERROR_MESSAGE } from "../constants/constants";

export const histroy = {
    getAllOrderHistory : async () => {
        try{
            const res = await axios.get(`/api/history/all`);
            return res.data;    
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 500:
                    throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD};
                case 404:
                    throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND};
            }
        }
    },
    getOrderHistory : async (label : string) => {
        try{
            const domain = label;
            const res = await axios.post(`/api/history`, domain);
            return res.data;    
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 500:
                    throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD};
                case 404:
                    throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND};
            }
        }
    },
    getOrderHistoryUpbit : async (label : string) => {
        try{
            const domain = { label };
            const res = await axios.post(`/api/history/upbit`, domain);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 500:
                    throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD};
                case 404:
                    throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND};
            }
        }
    }
    
}