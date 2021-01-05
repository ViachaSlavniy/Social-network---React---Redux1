type FrinedType = {
    id: number
    name: string
    img: string
}

const initialState = {
    friends: [
        {id: 1, name: 'Dmitriy', img: 'https://html5css.ru/w3images/avatar2.png'},
        {id: 2, name: 'Viacheslav', img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 3, name: 'Anjela', img: 'https://html5css.ru/howto/img_avatar2.png'}
    ] as Array<FrinedType>
}

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action:any):InitialStateType => {
    switch(action.type) {

    }
    return state;
}
export default sidebarReducer;