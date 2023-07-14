/* eslint-disable no-throw-literal */
import axios, { AxiosError } from "axios"
import { AUTH_ERROR_MESSAGE } from "../constants/constants";
import { SignInFormValue, SignUpFormValue } from "../components/auth/authType";

export const auth = {
    signUp: async (info : SignUpFormValue) => {
        try{
            const res = await axios.post(`/api/auth/register`, info);
            return res.data;
        } catch(err){
            const error = err as AxiosError;
            switch(error.response?.status){
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
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN };

                case 401:
                    throw { code: 401, message: AUTH_ERROR_MESSAGE.CANNOT_SIGN_IN };
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
                case 500:
                    throw { code: 500, message: AUTH_ERROR_MESSAGE.NEED_SIGN_IN };
            }
        }
    }
}
