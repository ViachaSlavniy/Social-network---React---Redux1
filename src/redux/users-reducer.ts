import { UserType } from '../types/types';
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

// Ициазилируем начальные данные
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingProgress: action.followingProgress
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}


type ActionsTypes = FollowSuccessActionType 
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType


// Создаем ActionCreators
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId:number):FollowSuccessActionType => {
    return {type: FOLLOW, userId}
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => {
    return {type: UNFOLLOW, userId}
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users:Array<UserType>):SetUsersActionType => {
    return {type: SET_USERS, users}
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (pageNumber:number):SetCurrentPageActionType => {
    return {type: SET_CURRENT_PAGE, currentPage: pageNumber}
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalCount:number):SetTotalUsersCountActionType => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalCount}
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    followingProgress: boolean
    userId: number
}
export const toggleFollowingProgress = (followingProgress:boolean, userId:number):ToggleFollowingProgressActionType => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, followingProgress, userId}
}


// Создаем ThunkCreators
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage:number, pageSize:number):ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
};
export const unfollow = (userId:number):ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        const data = await usersAPI.unfollow(userId)

        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));

    }
};
export const follow = (userId:number):ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        const data = await usersAPI.follow(userId)

        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
};


export default usersReducer;
