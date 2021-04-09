import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

const initialState = {
    initialized: false
}

export  type InitialStateType = typeof initialState

const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'SN/APP/SET_INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

// Создаем ActionCreators

export const actions = {
    setInitialized: () => ({type: 'SN/APP/SET_INITIALIZED'} as const)
}
// Создаем ThunkCreators

// type ThunkType = BaseThunkType<ActionsTypes>

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
                dispatch(actions.setInitialized());
            }
        )
}


export default appReducer;
