import React from 'react';
import {newPostsActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newPosts: (postText) => {
            dispatch(newPostsActionCreator(postText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;