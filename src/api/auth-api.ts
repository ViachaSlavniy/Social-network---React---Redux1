import {instance, APIResponseType, ResultCodeForCaptcha, ResultCodes} from "./api";

type MeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: string
}
type CaptchaURLResponseType = {
    url: string
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`)
            .then((response) => {
                return response.data
            });
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodes | ResultCodeForCaptcha>>(`/auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data
            });
    },
    logout() {
        return instance.delete(`/auth/login`)
            .then((response) => {
                return response.data
            });
    },
    getCaptchaUrl() {
        return instance.get<CaptchaURLResponseType>(`/security/get-captcha-url`)
            .then((response) => {
                return response.data
            });
    }
}