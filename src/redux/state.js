const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hey, how are you?", likesCounts: 15},
                {id: 2, message: "It is my first post", likesCounts: 20}
            ],
            newPostText: 'it-kama'
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dmitriy', img: 'https://html5css.ru/w3images/avatar2.png'},
                {id: 2, name: 'Viacheslav', img: 'https://www.w3schools.com/howto/img_avatar.png'},
                {id: 3, name: 'Anjela', img: 'https://html5css.ru/howto/img_avatar2.png'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCounts: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                message: this._state.messagesPage.newMessageText,
                img: 'https://html5css.ru/w3images/avatar2.png'
            }
            this._state.messagesPage.messagesData.unshift(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;