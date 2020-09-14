import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data
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

export let setAuthUserData = (userId, login, email, isAuth) => {
    return {type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}}
}
export let setCaptcha = (captchaUrl) => {
    return {type: SET_AUTH_USER_DATA, data: {captchaUrl}}
}

// Создаем ThunkCreators

export let getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.me()

        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export let login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        if (response.data.resultCode === 1) {
            let message = response.data.messages ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
        if (response.data.resultCode === 10) {
            let response = await authAPI.getCaptchaUrl()
            dispatch(setCaptcha(response.url));

            let message = response.data.messages ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}

export let logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
