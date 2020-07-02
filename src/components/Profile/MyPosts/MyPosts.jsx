import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let postInfo = React.createRef();
    let newPosts = () => {
        props.dispatch({
            type: 'ADD-POST'
        });
    }

    let onPostsChange = () => {
        let textMessage = postInfo.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: textMessage
        });
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts...</h3>
                <div>
                    <textarea onChange={ onPostsChange } ref={ postInfo }
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={ newPosts }>Add post</button>
                </div>
                <div className={s.newPosts}>
                    New posts
                </div>
                <div>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;