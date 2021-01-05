import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

type InitialStateType = {
    initialized: boolean
}

const initialState:InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action:any):InitialStateType => {
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

// Создаем ActionCreators

export let setInitialized = () => {
    return {type: SET_INITIALIZED}
}
// Создаем ThunkCreators

export let initializeApp = () => {
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
