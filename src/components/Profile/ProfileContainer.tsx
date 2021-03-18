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
import {withRouter} from "react-router-dom";
// import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    match: any
    authorizedUserId: number
    history: any
    profile: any
    userStatus: string
    updateProfilePhoto: (file:string) => void
    getProfile: (userId:number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: () => void
    saveProfile: () => void
}

class ProfileContainer extends React.Component<PropsType> {

    onSavePhoto = (e:any) => {
        if(e.target.files.length > 0) {
            this.props.updateProfilePhoto(e.target.files[0]);
        }
    }

    refreshProfile() {
        let userId = this.props.match.params.userId;
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

    componentDidUpdate(prevProps:any) {
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

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, updateProfilePhoto, saveProfile}),
    withRouter,
    // withAuthRedirectComponent
)(ProfileContainer);