import axios from "axios";

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': "deb5a1cf-eef7-4206-9237-48ed86537d51"}
});

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    RequiredCaptcha = 10
}

export type APIResponseType<D = {}, RC = ResultCodes> = {
    data: D
    resultCode: RC
    messages: Array<string>
}