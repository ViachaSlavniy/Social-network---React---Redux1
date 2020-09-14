import React from "react";
import profileReducer, {deletePost, newPostsActionCreator} from "./profile-reducer";

test('post must be added', () => {
    let action = newPostsActionCreator('Hello. It is Test');
    let state = {
        postsData: [
            {id: 1, message: "Hey, how are you?", likesCounts: 15},
            {id: 2, message: "It is my first post", likesCounts: 20}
        ]
    }
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

test('post must be delete', () => {
    let action = deletePost(1);
    let state = {
        postsData: [
            {id: 1, message: "Hey, how are you?", likesCounts: 15},
            {id: 2, message: "It is my first post", likesCounts: 20}
        ]
    }
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(1);
});