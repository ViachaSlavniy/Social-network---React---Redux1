import React from 'react';
import Profile from "./Profile";
import {
    getProfile,
    getUserStatus,
    saveProfile,
    updateProfilePhoto,
    updateUserStatus
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
// import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from '../../redux/redux-store';
import {ProfileType} from "../../types/types";

type MapPropsType = {
    profile: ProfileType
    userStatus: string
    authorizedUserId: number
}
type DispatchPropsType = {
    updateProfilePhoto: (file:File) => void
    getProfile: (userId:number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: () => void
    saveProfile: (formData: ProfileType, setEditMode?: (arg: boolean) => void) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    onSavePhoto = (file: File) => {
        this.props.updateProfilePhoto(file);
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsType) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         userStatus={this.props.userStatus}
                         updateStatus={this.props.updateUserStatus}
                         isOwner={this.props.match.params.userId === undefined}
                         onSavePhoto={this.onSavePhoto}
                         saveProfile={this.props.saveProfile}/>

            </div>
        )
    }
}
let mapStateToProps = (state:AppStateType) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        authorizedUserId: state.auth.userId
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, updateProfilePhoto, saveProfile}),
    withRouter,
    // withAuthRedirectComponent
)(ProfileContainer);