import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': "deb5a1cf-eef7-4206-9237-48ed86537d51"}
});

export const usersAPI = {
    getUsers(numberPage = 1, pageSize = 10) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then((response) => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            });
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then((response) => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
            .then((response) => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status});
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`/profile`, profile);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data
            });
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`/auth/login`);
    },
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`)
            .then((response) => {
                return response.data
            });
    }
}