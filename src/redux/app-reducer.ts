import {getAuthUserData} from "./auth-reducer";
// import {AppStateType} from "./redux-store";
// import {ThunkAction} from "redux-thunk";

const SET_INITIALIZED = 'SET_INITIALIZED';

type InitialStateType = {
    initialized: boolean
}

const initialState:InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }

}

type ActionsTypes = SetInitializedType

// Создаем ActionCreators

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
export let setInitialized = (): SetInitializedType => {
    return {type: SET_INITIALIZED}
}
// Создаем ThunkCreators

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = () => {
    return (dispatch:any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(setInitialized());
            }
        )
    }
}


export default appReducer;
