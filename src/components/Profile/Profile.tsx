import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    isOwner: boolean
    profile: any
    userStatus: string
    onSavePhoto: (e:any) => void
    saveProfile: () => void
    updateStatus: () => void
}

const Profile:React.FC<ProfileType> = (props) => {
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