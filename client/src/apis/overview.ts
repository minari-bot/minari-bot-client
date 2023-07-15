import axios, { AxiosError } from "axios";

export const overview = {
    getBinanceOverview : async () => {
        try{
            const res = await axios.get(`/api/overview/BINANCE`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400:
                    throw { code: 400, message: "no transanctions"};
                case 403:
                    throw { code: 403 };
                case 500:
                    throw { code: 500};
                case 404:
                    throw { code: 404};
            }
        }
    },
    getUpbitOverview : async () => {
        try{
            const res = await axios.get(`/api/overview/UPBIT`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400:
                    throw { code: 400, message: "no transanctions"}
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