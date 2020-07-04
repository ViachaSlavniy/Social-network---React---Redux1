const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

    ],
    messagesData: [
        {message: "Hello!", img: 'https://html5css.ru/w3images/avatar2.png'},
        {message: "How are you?", img: 'https://www.w3schools.com/howto/img_avatar.png'},
        {message: "Let's go to train", img: 'https://html5css.ru/howto/img_avatar2.png'},
        {message: "I'm fine", img: 'https://html5css.ru/w3images/avatar6.png'},
        {
            message: "UUUU ska",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'
        }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                img: 'https://html5css.ru/w3images/avatar2.png'
            }
            state.messagesData.unshift(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }
}

export let addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE });
export let onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default dialogsReducer;