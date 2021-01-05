const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

type DialogType = {
    id: number
    name: String
    img: string
}
type MessageType = {
    id: number
    message: String
    img: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dmitriy', img: 'https://html5css.ru/w3images/avatar2.png'},
        {id: 2, name: 'Viacheslav', img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 3, name: 'Anjela', img: 'https://html5css.ru/howto/img_avatar2.png'},
        {id: 4, name: 'Svetlana', img: 'https://html5css.ru/w3images/avatar6.png'},
        {
            id: 5,
            name: 'Sergey',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'
        }

    ] as Array<DialogType>,
    messagesData: [
        {id: 5,message: "Hello!", img: 'https://html5css.ru/w3images/avatar2.png'},
        {id: 4,message: "How are you?", img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 3,message: "Let's go to train", img: 'https://html5css.ru/howto/img_avatar2.png'},
        {id: 2,message: "I'm fine", img: 'https://html5css.ru/w3images/avatar6.png'},
        {   
            id: 1,
            message: "UUUU ska",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'
        }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let messageBody = action.newMessageText;
            let newId = state.messagesData.length + 1;
            let newMessage = {
                id: newId,
                message: messageBody,
                img: 'https://html5css.ru/w3images/avatar2.png'
            }
            return {
                ...state,
                messagesData: [newMessage, ...state.messagesData]
            };

        }
        default: {
            return state;
        }
    }
}

type AddNewMessageActionType = {
    type: typeof ADD_NEW_MESSAGE
    newMessageText: string
}
export let addNewMessage = (newMessageText:string):AddNewMessageActionType => ({type: ADD_NEW_MESSAGE, newMessageText});


export default dialogsReducer;