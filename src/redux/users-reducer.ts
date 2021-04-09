import { UserType } from '../types/types';
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";

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
        case 'SN/USERS/FOLLOW': {
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
        case 'SN/USERS/UNFOLLOW': {
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
        case 'SN/USERS/SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS': {
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

type ActionsTypes = InferActionsTypes< typeof actions>

// Создаем ActionCreators

export const actions = {
    followSuccess: (userId:number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId:number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users:Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (pageNumber:number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage: pageNumber} as const),
    setTotalUsersCount: (totalCount:number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', count: totalCount} as const),
    toggleIsFetching: (isFetching:boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (followingProgress:boolean, userId:number) => ({type: 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS', followingProgress, userId} as const),
}



// Создаем ThunkCreators
type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (currentPage:number, pageSize:number):ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
        dispatch(actions.toggleIsFetching(false));
    }
};
export const unfollow = (userId:number):ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, userId));
        const data = await usersAPI.unfollow(userId)

        if (data.resultCode === 0) {
            dispatch(actions.unfollowSuccess(userId));
        }
        dispatch(actions.toggleFollowingProgress(false, userId));

    }
};
export const follow = (userId:number):ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, userId));
        const data = await usersAPI.follow(userId)

        if (data.resultCode === 0) {
            dispatch(actions.followSuccess(userId));
        }
        dispatch(actions.toggleFollowingProgress(false, userId));
    }
};


export default usersReducer;
