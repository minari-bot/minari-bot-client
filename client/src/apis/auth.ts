import axios from "axios"
import { SignInFormValue, SignUpFormValue } from "../components/auth/authType";
import { AUTH_ERROR_MESSAGE, COMMON_ERROR, USER_INFO } from "../react-query/constants";
import { CustomErrorClass } from "../global/error";
import { userInfo } from "../global/type";
import { useCookies } from 'react-cookie';

export const auth = {
    signUp: async (info : SignUpFormValue) => {
        try{
            const res = await axios.post(`/api/auth/register`, info);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 403: throw new CustomErrorClass(AUTH_ERROR_MESSAGE.CANNOT_SIGN_UP, 403);
                    case 500: throw new CustomErrorClass(AUTH_ERROR_MESSAGE.CANNOT_SIGN_UP, 500);
                }
        }
    },
    signIn: async (info : SignInFormValue) => {
        try{
            const res = await axios.post(`/api/auth/login`, info);
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 401: throw new CustomErrorClass(AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN, 401);
                    case 403: throw new CustomErrorClass(AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN, 403);
                    case 500: throw new CustomErrorClass(AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN, 500);
                }
        }
    },
    signOut: async() => {
        try{
            const res = await axios.get(`/api/auth/logout`);
            // 쿠키 삭제 로직 추가
            // const cookies = document.cookie.split("; ");
            // for (const cookie of cookies) {
            //     const [name, value] = cookie.split("=");
            //     if (name === "Minari_Session_Id") {
            //         document.cookie = `${name}=${value}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            //         break;
            //     }
            // }
            return res.data;
        } catch(err : unknown){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 404: throw new CustomErrorClass(COMMON_ERROR.SERVER_404, 404);
                    case 500: throw new CustomErrorClass(COMMON_ERROR.SERVER_404, 500);
                }
        }
    },
    userInfo: async(user: userInfo | null) : Promise<userInfo | null> => {
        try{
            if(!user) return null;
            const res = await axios.get(`/api/auth/user`);
            return res.data;
        } catch(err){
            if(axios.isAxiosError(err))
                switch(err.response?.status){
                    case 403: throw new CustomErrorClass(USER_INFO.CANNOT_GET, 403); 
                    case 404: throw new CustomErrorClass(COMMON_ERROR.SERVER_404, 404);
                    case 500: throw new CustomErrorClass(USER_INFO.CANNOT_GET, 500);
                }
            return null;
        }
    }
}
