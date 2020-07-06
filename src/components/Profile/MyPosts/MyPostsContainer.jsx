import React from 'react';
import s from './MyPosts.module.css';
import {newPostsActionCreator, onPostsChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext>
            {
            (store) => {
                let state = store.getState();

                let addPosts = () => {
                    store.dispatch(newPostsActionCreator());
                }

                let updateNewPostText = (textMessage) => {
                    store.dispatch(onPostsChangeActionCreator(textMessage));
                }
                return (
                    <MyPosts postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}
                             onPostsChange={updateNewPostText}
                             newPosts={addPosts}/>
                )
            }
        }
        </StoreContext>
}

export default MyPostsContainer;