import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.profilePage.postsData.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let postInfo = React.createRef();
    let addPosts = () => {
        props.store.newPost();
    }

    let onPostsChange = () => {
        let textMessage = postInfo.current.value;
        props.store.updateNewPostText(textMessage);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts...</h3>
                <div>
                    <textarea onChange={ onPostsChange } ref={ postInfo }
                              value={props.state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPosts }>Add post</button>
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