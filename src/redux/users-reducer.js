const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     photoUrl: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
        //     fullName: 'Konstantin S.',
        //     status: 'I am OKAY',
        //     location: {
        //         country: 'Belarus',
        //         city: 'Minsk'
        //     }
        //
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt86sQ9Ya33SIwiA1tc4FGlpq1jqhimI_XVw&usqp=CAU',
        //     fullName: 'Vasilisa M.',
        //     status: 'I learn REACT',
        //     location: {
        //         country: 'Russia',
        //         city: 'Vologda'
        //     }
        //
        // }
    ]
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
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
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}

export let followAC = (userId) => {
    return {type: FOLLOW, userId}
}
export let unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
export let setUsersAC = (users) => {
    debugger
    return {type: SET_USERS, users}
}

export default UsersReducer;
