import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from './../types/types';

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCUSSED = 'SAVE_PHOTO_SUCCUSSED';

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

const profileReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_NEW_POST: {
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: [...state.postsData.filter(post => post.id !== action.postId)]
            }
        }
        case SAVE_PHOTO_SUCCUSSED: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos } as ProfileType
            }
        }

        default:
            return state;
    }

}

// Создаем ActionCreators
type NewPostsActionCreatorType = {
    type: typeof ADD_NEW_POST
    postText: string
}
export let newPostsActionCreator = (postText:string):NewPostsActionCreatorType => {
    return {type: ADD_NEW_POST, postText}
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export let setUserProfile = (profile:ProfileType):SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export let setUserStatus = (status:string):SetUserStatusActionType => {
    return {type: SET_USER_STATUS, status}
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export let deletePost = (postId:number):DeletePostActionType => {
    return {type: DELETE_POST, postId}
}

type SavePhotoSuccessedActionType = {
    type: typeof SAVE_PHOTO_SUCCUSSED
    photos: PhotosType
}
export let savePhotoSuccessed = (photos:PhotosType):SavePhotoSuccessedActionType => {
    return {type: SAVE_PHOTO_SUCCUSSED, photos}
}

// Создаем ThunkCreators

export let getProfile = (userId:number) => {
    return async (dispatch:any) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}

export let getUserStatus = (userId:number) => {
    return async (dispatch:any) => {
        let status = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(status));
    }
}

export let updateUserStatus = (status:string) => {
    return async (dispatch:any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export let updateProfilePhoto = (file:any) => {
    return async (dispatch:any) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
             dispatch(savePhotoSuccessed(response.data.data.photos));
        }
    }
}

export let saveProfile = (profile:ProfileType) => {
    return async (dispatch:any, getState:any) => {
        const userId = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
        } else {
            let message = response.data.messages ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('profileInfo', {_error: message}));
            return Promise.reject(message);
        }
    }
}

export default profileReducer;
