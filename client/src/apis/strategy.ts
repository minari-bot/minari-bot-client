import axios, { AxiosError } from "axios";

export const strategy = {
    getAllUserSubscribeItem : async () => {
        try{
            const res = await axios.get(`/api/subscribe/user/subscribes`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 500:
                    // throw { code: 500, message: HISTORY_ERROR_MESSAGE.CANNOT_LOAD};
                case 404:
                    // throw { code: 400, message: HISTORY_ERROR_MESSAGE.CANNOT_FOUND};
            }
        }
    }
    
}