import axios from "axios";
import { CustomErrorClass } from "../global/error";
import { userInfo } from "../global/type";
export const strategy = {
    getAllUserSubscribeItem : async (user : userInfo | null) => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/subscribe/user/subscribes`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400:  throw new CustomErrorClass("", 400);
                    case 403: throw new CustomErrorClass("", 403);
                    case 404: throw new CustomErrorClass("", 404);
                    case 500: throw new CustomErrorClass("", 500);
                }
        }
    },
    getBinanceSubscribeItem : async (user : userInfo | null) => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/subscribe/user/subscribes/BINANCE`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400:  throw new CustomErrorClass("", 400);
                    case 403: throw new CustomErrorClass("", 403);
                    case 404: throw new CustomErrorClass("", 404);
                    case 500: throw new CustomErrorClass("", 500);
                }
        }
    },
    getUpbitSubscribeItem : async (user : userInfo | null) => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/subscribe/user/subscribes/UPBIT`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass("", 400);
                    case 403: throw new CustomErrorClass("", 403);
                    case 404: throw new CustomErrorClass("", 404);
                    case 500: throw new CustomErrorClass("", 500);
                }
        }
    },
    SubscribeStrategy: async({id, label, user} : {id : string, label: string, user: userInfo | null}) => {
        try{
            if(!user) return null;
            const res = await axios.put(`/api/subscribe/${id}/add`,{label: label});
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass("", 400);
                    case 403: throw new CustomErrorClass("", 403);
                    case 404: throw new CustomErrorClass("", 404);
                    case 500: throw new CustomErrorClass("", 500);
                }
        }
    }
}