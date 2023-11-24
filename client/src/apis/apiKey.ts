import axios from "axios";
import { apiKeyCheckValue, apiKeyFormValue } from "../components/api/apiType";
import { APIKEY_ERROR_MESSAGE } from "../react-query/constants";
import { CustomErrorClass } from "../global/error";
import { userInfo } from "../global/type";

export const apiKey = {
    getAllApiKeys: async (user: userInfo | null) => {
        if(!user) return null;
        try{
            const res = await axios.get(`/api/apikey`);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 401: throw new CustomErrorClass("", 401);
                    case 403: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_GET, 403);
                    case 500: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_GET, 500);
                }
        }
    },
    getApiKey: async(id : string) => {
        try{
            const res = await axios.get(`/api/apikey/overview/${id}`);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 401: throw new CustomErrorClass("", 401);
                    case 403: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_GET, 403);
                    case 500: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_GET, 500);
                }
        }
    },
    createApiKey: async (info : apiKeyFormValue) => {
        try{
            const res = await axios.post(`/api/apikey`, info);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 400: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.UNVALID_KEY, 400);
                    case 401: throw new CustomErrorClass("", 401);
                    case 403: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_CREATE, 403);
                    case 409: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.DUPLICATION, 409);
                    case 500: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_CREATE, 500);
                }
        }
    },
    deleteApiKey: async (id : string) => {
        try{
            const res = await axios.delete(`/api/apikey/${id}`);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
            switch(err.response?.status){
                case 401: throw new CustomErrorClass("", 401);
                case 404: throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_DELETE, 404);
            
            }
        }
    },
    checkApiKey: async (info : apiKeyCheckValue) => {
        try{
            const res = await axios.post(`/api/apikey/check`, info);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err)){
                switch(err.response?.status){
                    case 400: 
                        throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.UNVALID_KEY, 400);
                    case 401: throw new CustomErrorClass("", 401);
                    case 403: 
                        throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_CREATE, 403);
                    case 500: 
                        throw new CustomErrorClass(APIKEY_ERROR_MESSAGE.CANNOT_CREATE, 500);
                }
            }
        }
    }
}