import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../redux/helpers/validators";
import {Elem} from "../../Common/FormControls/FormControls";
import {PostType} from "../../../types/types";

const maxLength = maxLengthCreator(30)

type PostOwnProps = {

}

const AddPostsForm: React.FC<InjectedFormProps<PostFormValuesType, PostOwnProps> & PostOwnProps> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'}
                       component={Elem}
                       validate={[required, maxLength]}
                       placeholder={'Post message...'}
                       typefield={'textarea'}/>
            </div>
            <div>
                <button className={s.newPostBtn}>Add post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm<PostFormValuesType, PostOwnProps>({form: 'posts'})(AddPostsForm)

export type MapPropsType = {
    postsData: Array<PostType>
}

export type DispatchPropsType = {
    addNewPosts: (post: string) => void
}

type PostFormValuesType = {
    post: string
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCounts={p.likesCounts}/>);

    const addNewPost = (values: PostFormValuesType) => {
        props.addNewPosts(values.post);
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