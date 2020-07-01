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
            dialogsData:    [
                {id: 1, name: 'Dmitriy', img: 'https://html5css.ru/w3images/avatar2.png'},
                {id: 2, name: 'Viacheslav', img: 'https://www.w3schools.com/howto/img_avatar.png'},
                {id: 3, name: 'Anjela', img: 'https://html5css.ru/howto/img_avatar2.png'},
                {id: 4, name: 'Svetlana', img: 'https://html5css.ru/w3images/avatar6.png'},
                {id: 5, name: 'Sergey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'}

            ],
            messagesData: [
                {message: "Hello!", img: 'https://html5css.ru/w3images/avatar2.png'},
                {message: "How are you?", img: 'https://www.w3schools.com/howto/img_avatar.png'},
                {message: "Let's go to train", img: 'https://html5css.ru/howto/img_avatar2.png'},
                {message: "I'm fine", img: 'https://html5css.ru/w3images/avatar6.png'},
                {message: "UUUU ska", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'}
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
    getState() {
        return this._state;
    },
    rerenderTree() {
        console.log('State changed')
    },
    newPost() {
        debugger;
        let newPost = {
            id: 3,
            message: store._state.profilePage.newPostText,
            likesCounts: 0
        };
        store._state.profilePage.postsData.push(newPost);
        store._state.profilePage.newPostText = '';
        store.rerenderTree(store);
    },
    updateNewPostText(newText) {
        store._state.profilePage.newPostText = newText;
        store.rerenderTree(store);
    },
    newMessage() {
        let newMessage = {
            message: store._state.messagesPage.newMessageText,
            img: 'https://html5css.ru/w3images/avatar2.png'
        }
        store._state.messagesPage.messagesData.unshift(newMessage);
        store._state.messagesPage.newMessageText = '';
        store.rerenderTree(store);
    },
    updateNewMessageText(newText) {
        store._state.messagesPage.newMessageText = newText;
        store.rerenderTree(store);
    },
    subscribe(observer) {
        store.rerenderTree = observer;
    }
}

export default store;