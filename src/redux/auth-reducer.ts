import {ResultCodeForCaptcha, ResultCodes} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/auth-api";

const initialState = {
    userId: null as number | null ,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_AUTH_USER_DATA': {
            return {
                ...state,
                ...action.data,
            }
        }
        case 'SN/AUTH/SET_CAPTCHA': {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
    }

}

type ActionsTypes = InferActionsTypes<typeof actions>

// Создаем ActionCreators

export const actions = {
    setAuthUserData: (userId:number | null, login:string | null, email:string | null, isAuth:boolean) => ({
            type: 'SN/AUTH/SET_AUTH_USER_DATA', data: {userId, login, email, isAuth}
        } as const),
    setCaptcha: (captchaUrl:string) => ({type: 'SN/AUTH/SET_CAPTCHA', captchaUrl} as const),
}


// Создаем ThunkCreators

type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        const data = await authAPI.me()

        if (data.resultCode === ResultCodes.Success) {
            const {id, login, email} = data.data;
            dispatch(actions.setAuthUserData(id, login, email, true));
        }
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string | null): ThunkType => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodes.Success) {
            dispatch(getAuthUserData())
        } else if (data.resultCode === ResultCodes.Error) {
            const message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        } else if (data.resultCode === ResultCodeForCaptcha.RequiredCaptcha) {
            const response = await authAPI.getCaptchaUrl()
            dispatch(actions.setCaptcha(response.url));
        } else {
            const message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}

export const logout = ():ThunkType => {
    return async (dispatch) => {
        const data = await authAPI.logout()

        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
