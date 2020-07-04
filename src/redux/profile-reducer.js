const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, message: "Hey, how are you?", likesCounts: 15},
        {id: 2, message: "It is my first post", likesCounts: 20}
    ],
    newPostText: 'it-kama'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCounts: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export let newPostsActionCreator = () => {
    return {type: ADD_NEW_POST}
}
export let onPostsChangeActionCreator = (textMessage) => ({type: UPDATE_NEW_POST_TEXT, newText: textMessage})

export default profileReducer;
