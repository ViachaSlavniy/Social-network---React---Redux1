import React, {useEffect} from 'react';
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, getUserStatus, updateProfilePhoto} from "../../redux/profile-reducer";

type ProfileComponentType = {}
type ParamsType = {
    userId: string
}

const ProfilePage:React.FC<ProfileComponentType> = (props) => {
    const params:ParamsType = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId);
    const profile = useSelector((state: AppStateType) => state.profilePage.profile);
    const userStatus = useSelector((state: AppStateType) => state.profilePage.userStatus);

    const onSavePhoto = (file: File) => {
        dispatch(updateProfilePhoto(file));
    }

    const refreshProfile = () => {
        let userId: number | null = +params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push('/login');
            }
        }
        dispatch(getProfile(userId));
        dispatch(getUserStatus(userId));
    }

    useEffect(() => {
        refreshProfile();
    }, [params.userId])

    return (
        <div>
            <ProfileInfo profile={profile}
                         userStatus={userStatus}
                         isOwner={params.userId === undefined}
                         onSavePhoto={onSavePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}

export default ProfilePage;