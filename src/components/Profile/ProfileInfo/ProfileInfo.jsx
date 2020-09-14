import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.backgroundPicture} src="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-124-cropped-images-dive-norway-8-10-978-298-1526660074-9458e322565a645c2d96bdd300eba8b1.jpg"/>
            </div>
            <div className={s.userInfoWrapper}>
                <div className={s.avatarWrapper}>
                    <img className={s.avatar} src={props.profile.photos.large}/>
                </div>
                <div className={s.userInfo}>
                    <div>
                        <div>Name: {props.profile.fullName}</div>
                        <ProfileStatusWithHooks userStatus={props.userStatus}
                                       updateStatus={props.updateStatus}/>
                    </div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>Contacts: {props.profile.contacts.vk}</div>
                    <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                    <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo; 