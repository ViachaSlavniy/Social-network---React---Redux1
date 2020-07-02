import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div>
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}/>
        </div>
    </div>
}

export default Profile;