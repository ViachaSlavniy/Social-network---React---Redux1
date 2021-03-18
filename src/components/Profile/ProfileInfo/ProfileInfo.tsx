import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import unknownUser from './../../../assets/images/unknown-user.png';
import ProfileDataReduxForm from "./ProfileDataForm";
import { ProfileType } from '../../../types/types';

type ProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    onSavePhoto: (e:any) => void
}

export type ProfileInfoFormValuesType = {
    fullName: string
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

// export type ProfileInfoFormKeysType = Extract<keyof ProfileinfoFormValuesType, string>

const ProfileInfo:React.FC<ProfileInfoType> = (props) => {
    let [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader/>
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    let onSubmit = (formData: ProfileInfoFormValuesType) => {
        console.log(formData)
        // props.saveProfile(formData)
        //     .then( () => {
        //         setEditMode(false);
        //     });
    }

    return (
        <div>
            <div>
                <img className={s.backgroundPicture} src="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-124-cropped-images-dive-norway-8-10-978-298-1526660074-9458e322565a645c2d96bdd300eba8b1.jpg" alt="background"/>
            </div>
            <div className={s.userInfoWrapper}>
                <div className={s.avatarWrapper}>
                    <img className={s.avatar} src={props.profile.photos.large || unknownUser} alt="avatar"/>
                    {props.isOwner && <input onChange={props.onSavePhoto} type="file"/>}
                </div>
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit}{...props}/> : <ProfileData {...props} activateEditMode={activateEditMode}/>}
            </div>
        </div>
    )
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
    userStatus: string
    updateStatus: (newStatus: string) => void
}

const ProfileData:React.FC<ProfileDataType> = (props) => {
    return (
        <div className={s.userInfo}>
            {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
            <div>
                <div><b>Name:</b> {props.profile.fullName}</div>
                <div>
                    <ProfileStatusWithHooks userStatus={props.userStatus}
                                            updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <b>About me:</b> {props.profile.aboutMe}
                </div>
                <div>
                    <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
                </div>
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}</div>
            </div>
        </div>
    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

export const Contact:React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
    <div className={s.socialLink}><b>{contactTitle}: </b>
        {contactValue}
    </div>
    )
}

export default ProfileInfo; 