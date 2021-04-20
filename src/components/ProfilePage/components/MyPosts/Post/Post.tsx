import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCounts: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCounts}
            </div>
        </div>
    )
}

export default Post;