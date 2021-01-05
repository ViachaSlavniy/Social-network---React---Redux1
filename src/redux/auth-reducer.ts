import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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

const authReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                userId: "dabhwdbhawd"
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
    type: typeof SET_AUTH_USER_DATA,
    data: {
        captchaUrl: string
    }
}
export let setCaptcha = (captchaUrl:string):SetCaptchaActionType => {
    return {type: SET_AUTH_USER_DATA, data: {captchaUrl}}
}

// Создаем ThunkCreators

export let getAuthUserData = () => {
    return async (dispatch:any) => {
        let data = await authAPI.me()

        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export let login = (email:string, password:string, rememberMe:boolean, captcha:string) => {
    return async (dispatch:any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 1) {
            let message = response.data.messages ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        } else if (response.data.resultCode === 10) {
            let response = await authAPI.getCaptchaUrl()
            dispatch(setCaptcha(response.url));
        } else {
            let message = response.data.messages ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}

export let logout = () => {
    return async (dispatch:any) => {
        let response = await authAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
