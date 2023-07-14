import axios, { AxiosError } from "axios";
import { APIKEY_ERROR_MESSAGE } from "../constants/constants";
import { apiKeyCheckValue, apiKeyFormValue } from "../components/api/apiType";

export const apiKey = {
    getAllApiKeys: async () => {
        try{
            const res = await axios.get(`/api/apikey`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 500:
                    throw { code: 500, message: APIKEY_ERROR_MESSAGE.CANNOT_GET };
                case 403:
                    throw { code: 403, message: APIKEY_ERROR_MESSAGE.CANNOT_GET};
            }
        }
    },
    createApiKey: async (info : apiKeyFormValue) => {
        try{
            const res = await axios.post(`/api/apikey`, info);
            console.log(info);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400:
                    throw {code: 400, message: APIKEY_ERROR_MESSAGE.UNVALID_KEY};
                case 403:
                    throw {code: 403, message: APIKEY_ERROR_MESSAGE.CANNOT_CREATE};
                case 409:    
                    throw { code: 409, message: APIKEY_ERROR_MESSAGE.DUPLICATION};
                case 500:
                    throw { code: 500, message: APIKEY_ERROR_MESSAGE.CANNOT_CREATE };
            }
        }
    },
    deleteApiKey: async (id : string) => {
        try{
            const res = await axios.delete(`/api/apikey/${id}`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 404:
                    throw {code: 404, message: APIKEY_ERROR_MESSAGE.CANNOT_DELETE};
            
            }
        }
    },
    checkApiKey: async (info : apiKeyCheckValue) => {
        try{
            const res = await axios.post(`/api/apikey/check`, info);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 400:
                    throw {code: 400, message: APIKEY_ERROR_MESSAGE.UNVALID_KEY};
                case 403:
                    throw {code: 403, message: APIKEY_ERROR_MESSAGE.CANNOT_CREATE};
                case 500:
                    throw { code: 500, message: APIKEY_ERROR_MESSAGE.CANNOT_CREATE };
            }
        }
    }
}