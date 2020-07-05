import React from 'react';
import s from './MyPosts.module.css';
import {newPostsActionCreator, onPostsChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPosts = () => {
        props.store.dispatch(newPostsActionCreator());
    }

    let updateNewPostText = (textMessage) => {
        props.store.dispatch(onPostsChangeActionCreator(textMessage));
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 newPostText={state.newMessageText}
                 onPostsChange={updateNewPostText}
                 newPosts={addPosts}/>
    )
}

export default MyPostsContainer;