import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
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
                    <Post message="Hey, how are you?" likesCounts="15"/>
                    <Post message="It is my first post" likesCounts="20"/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;