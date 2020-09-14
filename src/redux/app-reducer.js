import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(setInitialized());
            }
        )
    }
}


export default appReducer;
