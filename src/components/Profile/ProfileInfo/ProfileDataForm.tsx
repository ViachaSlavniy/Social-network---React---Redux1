import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { ProfileType } from "../../../types/types";

type ProfileOwnProps = {
    profile: ProfileType
    isOwner: boolean
    userStatus: string
    updateStatus: (newStatus: string) => void
}

const ProfileDataForm:React.FC<InjectedFormProps<ProfileType, ProfileOwnProps> & ProfileOwnProps> = (props) => {
    return (
        <form className={s.userInfo} onSubmit={props.handleSubmit}>
            {props.isOwner && <button>Save</button>}
            {props.error && <div><span className={s.error}>{props.error}</span></div>}
            <div>
                <div>
                    <b>Name:</b>
                    <div>
                        <Field placeholder={'Name'} name={'fullName'} component={'input'}/>
                    </div>
                </div>
                <div>
                    <ProfileStatusWithHooks userStatus={props.userStatus}
                                            updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <b>About me:</b>
                    <div>
                        <Field placeholder={'About me'} name={'aboutMe'} component={'textarea'}/>
                    </div>
                </div>

                <div>
                    <b>Looking for a job:</b>
                    <div>
                        <Field type={'checkbox'} name={'lookingForAJob'} component={'input'}/>
                    </div>
                </div>
                <div>
                    <b>My professional skills:</b>
                    <div>
                        <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={'textarea'}/>
                    </div>
                </div>
                <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}:
                            <div>
                                <Field placeholder={key} name={'contacts.' + key} component={'input'}/>
                            </div>
                        </b>
                    </div>
                })}</div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, ProfileOwnProps>({form: 'profileInfo'})(ProfileDataForm);

export default ProfileDataReduxForm;