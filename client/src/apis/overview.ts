import axios from "axios";
import { CustomErrorClass } from "../global/error";
import { userInfo } from "../global/type";

export const overview = {
    getBinanceOverview : async (user : userInfo | null) => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/overview/BINANCE`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass("",400)
                    case 401: throw new CustomErrorClass("", 401)
                    case 403: throw new CustomErrorClass("",403)
                    case 404: throw new CustomErrorClass("",404)
                    case 500: throw new CustomErrorClass("",500)
                }
        }
    },
    getUpbitOverview : async (user: userInfo | null) => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/overview/UPBIT`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass("", 400)
                    case 401: throw new CustomErrorClass("", 401)
                    case 403: throw new CustomErrorClass("", 403)
                    case 404: throw new CustomErrorClass("", 404)
                    case 500: throw new CustomErrorClass("", 500)
                }
        }
    }
    
}