import axios, { AxiosError } from "axios";

export const strategy = {
    getAllUserSubscribeItem : async () => {
        try{
            const res = await axios.get(`/api/subscribe/user/subscribes`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400: 
                    throw { code: 400};
                case 403:
                    throw { code: 403 };
                case 404:
                    throw { code: 404 };
                case 500:
                    throw { code: 500 };
            }
        }
    },
    getBinanceSubscribeItem : async () => {
        try{
            const res = await axios.get(`/api/subscribe/user/subscribes/BINANCE`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400: 
                    throw { code: 400};
                case 403:
                    throw { code: 403 };
                case 404:
                    throw { code: 404};
                case 500:
                    throw { code: 500};
            }
        }
    },
    getUpbitSubscribeItem : async () => {
        try{
            const res = await axios.get(`/api/subscribe/user/subscribes/UPBIT`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400:
                    throw { code: 400 };
                case 403:
                    throw { code: 403 };
                case 404:
                    throw { code: 404};
                case 500:
                    throw { code: 500};
            }
        }
    }
    
    
}