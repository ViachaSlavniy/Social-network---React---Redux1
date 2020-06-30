import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div>
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                newPost={props.newPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    </div>
}

export default Profile;