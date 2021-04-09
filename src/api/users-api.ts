import {instance, APIResponseType} from "./api";
import {profileAPI} from "./profile-api";
import {UserType} from "../types/types";

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(numberPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseType>(`users?page=${numberPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            });
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then((response) => {
                return response.data
            });
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then((response) => response.data) as Promise<APIResponseType>;
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }
}