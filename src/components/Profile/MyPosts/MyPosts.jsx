import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hey, how are you?", likesCounts: 15},
        {id: 2, message: "It is my first post", likesCounts: 20}
    ]

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts...</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.newPosts}>
                    New posts
                </div>
                <div>
                    <Post message={postsData[0].message} likesCounts={postsData[0].likesCounts}/>
                    <Post message={postsData[1].message} likesCounts={postsData[1].likesCounts}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;