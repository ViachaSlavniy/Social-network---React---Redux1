import {authAPI, ResultCodeForCaptcha, ResultCodes} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

type InitialStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const initialState:InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }

}

type ActionsTypes = SetAuthUserDataActionType
    | SetCaptchaActionType

// Создаем ActionCreators

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    data: SetAuthUserDataActionPayloadType
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
export let setAuthUserData = (userId:number | null, login:string | null, email:string | null, isAuth:boolean):SetAuthUserDataActionType => {
    return {type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}}
}

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA,
    data: {
        captchaUrl: string
    }
}
export let setCaptcha = (captchaUrl:string):SetCaptchaActionType => {
    return {type: SET_CAPTCHA, data: {captchaUrl}}
}

// Создаем ThunkCreators

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export let getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.me()

        if (data.resultCode === ResultCodes.Success) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export let login = (email:string, password:string, rememberMe:boolean, captcha:string | null) => {
    return async (dispatch:any) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodes.Success) {
            dispatch(getAuthUserData())
        } else if (data.resultCode === ResultCodes.Error) {
            let message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        } else if (data.resultCode === ResultCodeForCaptcha.RequiredCaptcha) {
            let response = await authAPI.getCaptchaUrl()
            dispatch(setCaptcha(response.url));
        } else {
            let message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}

export let logout = ():ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.logout()

        if (data.resultCode === ResultCodes.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
