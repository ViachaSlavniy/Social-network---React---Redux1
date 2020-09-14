import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../redux/helpers/validators";
import {Elem} from "../../Common/FormControls/FormControls";

const maxLength = maxLengthCreator(30)

let MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'} component={Elem}
                       validate={[required, maxLength]}
                       placeholder={'Post message...'}
                       typeField={'textarea'}/>
            </div>
            <div>
                <button className={s.newPostBtn}>Add post</button>
            </div>
        </form>
    )
}

let MyPostsReduxForm = reduxForm({form: 'posts'})(MyPostsForm)

const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let addNewPost = (values) => {
        props.newPosts(values.post);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts...</h3>
                <MyPostsReduxForm onSubmit={addNewPost}/>
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