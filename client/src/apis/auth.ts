/* eslint-disable no-throw-literal */
import axios, { AxiosError } from "axios"
import { SignInFormValue, SignUpFormValue } from "../components/auth/authType";
import { AUTH_ERROR_MESSAGE } from "../react-query/constants";

export const auth = {
    signUp: async (info : SignUpFormValue) => {
        try{
            const res = await axios.post(`/api/auth/register`, info);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 403:
                    throw { code: 403 };
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_UP };
            }
        }
    },
    signIn: async (info : SignInFormValue) => {
        try{
            const res = await axios.post(`/api/auth/login`, info);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            console.log(error);
            switch(error.response?.status){
                case 401:
                    throw { code: 401, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN };
                case 403:
                    throw { code: 403 };
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN };

            }
        }
    },
    signOut: async() => {
        try{
            const res = await axios.get(`/api/auth/logout`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 403:
                    throw { code: 403 };
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN };
            }
        }
    },
    userInfo: async() => {
        try{
            const res = await axios.get(`/api/auth/userinfo`);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
                case 403:
                    throw { code: 403 }; 
                case 404:
                    throw { code: 404 };
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.NEED_SIGN_IN };
            }
        }
    }
}
