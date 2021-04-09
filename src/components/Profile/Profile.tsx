import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type ProfileComponentType = {
    isOwner: boolean
    profile: ProfileType
    userStatus: string
    onSavePhoto: (file: File) => void
    saveProfile: (formData: ProfileType, setEditMode?: (arg: boolean) => void) => void
    updateStatus: () => void
}

const Profile:React.FC<ProfileComponentType> = (props) => {
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