/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 17:23:31
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 17:14:24
 */
import axios, {AxiosInstance, AxiosError, InternalAxiosRequestConfig} from 'axios';

const service:AxiosInstance = axios.create({
    baseURL: "/",
    timeout: 5000
});

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token") as string 
        console.log('token :>> ', token);
        if(token) {
          config.headers!.Authorization = token;
        }
 
        return config;

    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response:any) => {
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
