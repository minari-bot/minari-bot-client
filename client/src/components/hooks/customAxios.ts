import axios, { AxiosRequestConfig } from 'axios';
import { toastState, useToast } from '../../atoms/toast';

const AxiosConfigure: AxiosRequestConfig = {
//   baseURL: process.env.API_SERVER_URL,
//   timeout: 1000,
//   withCredentials: true,
};

// const customAxios = axios.create(AxiosConfigure);
// const session = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_STORAGE_KEY);


// customAxios.interceptors.request.use((config) => {
//   // 모든 Request Header에 Access토큰을 넣어주는 역할
//   if (!config.headers.authorization && session) {
//     config.headers.authorization = JSON.parse(session);
//   }
//   return config;
// }, (error) => error);
// customAxios.interceptors.response.use(
//   (response) => response, 
//   async (error) => {
//     // 세션 만료시, 로그인 해제 처리
//     const setToast = useToast();
//     console.log(error);
//     const prevRequest = error?.config;
//     console.log(error?.response?.status,!prevRequest?.sent )
//     if( error?.response?.status === 401 && !prevRequest?.sent ) {
//         prevRequest.sent = true;
//         setToast({state: 'error', text: "로그인 시간이 초과되었습니다."});
//         console.log("세션 만료");
//         return customAxios(prevRequest);
//     }
//     return customAxios;
//   },
// );

// export default customAxios;