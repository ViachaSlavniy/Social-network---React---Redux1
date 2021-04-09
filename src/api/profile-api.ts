import {PhotosType, ProfileType} from "../types/types";
import {
    instance,
    APIResponseType,
} from "./api";

type UpdatePhotosType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then((res) => res.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then((res) => res.data);
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`/profile/status`, {status: status}).then((res) => res.data);
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<APIResponseType<UpdatePhotosType>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => res.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`/profile`, profile).then((res) => res.data);
    },
}