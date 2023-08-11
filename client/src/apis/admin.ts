import axios from "axios";
import { CustomErrorClass } from "../global/error";
import { userInfo } from "../global/type";
export interface StrategyformInfo{
    strategyName: string,
	exchange: string,
	symbol: string,
	strategyUrl: string,
	leverage: string
}
export const admin = {
    getAllAlertStrategy: async (user : userInfo | null) => {
        try{
            if(user?.userType !== "ADMIN") return [];
            const res = await axios.get(`/api/alertstrategy`);
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
    openStrategy: async ({user, id} : { user: userInfo | null, id : string}) => {
        try{
            if(user?.userType !== "ADMIN") return null;
            const res = await axios.post(`/api/subscribe/${id}`);
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
    closeStrategy: async ({user, id} : { user: userInfo | null, id : string}) => {
        try{
            if(user?.userType !== "ADMIN") return null;
            const res = await axios.delete(`/api/subscribe/${id}`);
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
    deleteStrategy: async ({user, id} : { user: userInfo | null, id : string}) => {
        try{
            if(user?.userType !== "ADMIN") return null;
            const res = await axios.delete(`/api/alertstrategy/${id}`);
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
    editStrategy: async ({user, id, formInfo} : { user: userInfo | null, id : string, formInfo : StrategyformInfo}) => {
        try{
            if(user?.userType !== "ADMIN") return null;
            const res = await axios.put(`/api/alertstrategy/${id}`, formInfo);
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
    createAlertStrategy: async ({user, formInfo} : {user: userInfo | null, formInfo : StrategyformInfo}) => {
        try{
            if(user?.userType !== "ADMIN") return null;
            const res = await axios.post(`/api/alertstrategy`, formInfo);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass("", 400);
                    case 403: throw new CustomErrorClass("", 403);
                    case 404: throw new CustomErrorClass("", 404);
                    case 409: throw new CustomErrorClass("중복된 Label 입니다.", 409);
                    case 500: throw new CustomErrorClass("", 500);
                }
        }
    }, 
}