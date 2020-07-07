import React from 'react';
import {newPostsActionCreator, onPostsChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/* const MyPostsContainer = () => {
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

 */

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostsChange: (textMessage) => {
            dispatch(onPostsChangeActionCreator(textMessage));
        },
        newPosts: () => {
            dispatch(newPostsActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;