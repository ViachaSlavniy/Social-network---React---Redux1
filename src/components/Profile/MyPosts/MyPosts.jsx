import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let messageInfo = React.createRef();
    let sendMessage = () => {
        let textMessage = messageInfo.current.value;
        props.newPost(textMessage);
        messageInfo.current.value = '';
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts...</h3>
                <div>
                    <textarea ref={ messageInfo }></textarea>
                </div>
                <div>
                    <button onClick={ sendMessage }>Add post</button>
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