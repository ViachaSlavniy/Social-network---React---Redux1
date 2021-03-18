import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";

const instance = axios.create({
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

type UsersResponseType = {
    items: Array<UserType>
    totalCount?: number
    error?: string
}

export const usersAPI = {
    getUsers(numberPage = 1, pageSize = 10) {
        return instance.get<UsersResponseType>(`users?page=${numberPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then((response) => {
                return response.data
            });
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            });
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }
}

type ProfileResponseType = ProfileType
type UpdateProfileResponse = {
    resultCode: ResultCodes
    messages: Array<string>
    data: {}
}
type UpdateStatusResponse = {
    resultCode: ResultCodes
    messages: Array<string>
    data: {}
}
type UpdatePhotoResponse = {
    photos: PhotosType
    resultCode: ResultCodes
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileResponseType>(`profile/` + userId)
            .then((response) => {
                return response.data
            });
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/`+ userId)
            .then((response) => {
                return response.data
            });
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponse>(`/profile/status`, {status: status})
            .then((response) => {
                return response.data
            });
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<UpdatePhotoResponse>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data
        });
    },
    saveProfile(profile:ProfileType) {
        return instance.put<UpdateProfileResponse>(`/profile`, profile).then((response) => {
            return response.data
        });
    },
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: string
    }
    resultCode: ResultCodes | ResultCodeForCaptcha
    messages: Array<string>
}
type LogoutResponseType = {
    data: {}
    resultCode: ResultCodes | ResultCodeForCaptcha
    messages: Array<string>
}
type CaptchaURLResponseType = {
    url: string
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then((response) => {
                return response.data
            });
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<LoginResponseType>(`/auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data
            });
    },
    logout() {
        return instance.delete<LogoutResponseType>(`/auth/login`)
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