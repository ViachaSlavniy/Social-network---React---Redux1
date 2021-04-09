import profileReducer, { actions } from "./profile-reducer";
import {PostType, ProfileType} from "../types/types";

const {newPostsActionCreator, deletePost} = actions;

test('post must be added', () => {
    let action = newPostsActionCreator('Hello. It is a Test');
    let state = {
        postsData: [
            {id: 1, message: "Hey, how are you?", likesCounts: 15},
            {id: 2, message: "It is my first post", likesCounts: 20}
        ] as Array<PostType>,
        profile: null as ProfileType | null,
        userStatus: '' as string,
        newPostText: '' as string
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
        ] as Array<PostType>,
        profile: null as ProfileType | null,
        userStatus: '' as string,
        newPostText: '' as string
    }
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(1);
});