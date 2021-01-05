import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         userStatus={props.userStatus}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}
                         onSavePhoto={props.onSavePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;