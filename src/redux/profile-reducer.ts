import {ResultCodes} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from '../types/types';
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";
import {profileAPI} from "../api/profile-api";

const initialState = {
    postsData: [
        {id: 1, message: "Hey, how are you?", likesCounts: 15},
        {id: 2, message: "It is my first post", likesCounts: 20}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    userStatus: '' as string,
    newPostText: '' as string
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_NEW_POST': {
            let newPost = {
                id: 3,
                message: action.postText,
                likesCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SN/PROFILE/SET_USER_STATUS': {
            return {
                ...state,
                userStatus: action.status
            };
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                postsData: [...state.postsData.filter(post => post.id !== action.postId)]
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCUSSED': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos } as ProfileType
            }
        }

        default:
            return state;
    }

}

type ActionsTypes = InferActionsTypes<typeof actions>

// Создаем ActionCreators
export const actions = {
    newPostsActionCreator: (postText:string) => ({type: 'SN/PROFILE/ADD_NEW_POST', postText} as const),
    setUserProfile: (profile:ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setUserStatus: (status:string) => ({type: 'SN/PROFILE/SET_USER_STATUS', status} as const),
    deletePost: (postId:number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccessed: (photos:PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCUSSED', photos} as const),
}

// Создаем ThunkCreators

type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export let getProfile = (userId:number): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data));
    }
}

export let getUserStatus = (userId:number): ThunkType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId)
        dispatch(actions.setUserStatus(status));
    }
}

export let updateUserStatus = (status:string): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setUserStatus(status));
        }
    }
}

export let updateProfilePhoto = (file:File): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file);
        if (data.resultCode === ResultCodes.Success) {
             dispatch(actions.savePhotoSuccessed(data.data.photos));
        }
    }
}

export let saveProfile = (profile:ProfileType, setEditMode?: (arg: boolean) => void): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        let data = await profileAPI.saveProfile(profile);
        if (data.resultCode === ResultCodes.Success) {
            if (userId !== null) {
                dispatch(getProfile(userId));
                if(setEditMode) {
                    setEditMode(false);
                }
            } else {
             throw new Error("userId can't be null");
            }
        } else {
            let message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('profileInfo', {_error: message}));
            return Promise.reject(message);
        }
    }
}

export default profileReducer;
