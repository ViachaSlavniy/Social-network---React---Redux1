import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    postsData: [
        {id: 1, message: "Hey, how are you?", likesCounts: 15},
        {id: 2, message: "It is my first post", likesCounts: 20}
    ],
    profile: null,
    userStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: 3,
                message: action.postText,
                likesCounts: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],

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

        default:
            return state;
    }

}

// Создаем ActionCreators

export let newPostsActionCreator = (postText) => {
    return {type: ADD_NEW_POST, postText}
}
export let setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export let setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}

export let deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

// Создаем ThunkCreators

export let getProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}

export let getUserStatus = (userId) => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(status));
    }
}

export let updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profileReducer;
