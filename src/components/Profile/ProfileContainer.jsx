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

class ProfileContainer extends React.Component {

    onSavePhoto = (e) => {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         userStatus={this.props.userStatus}
                         updateStatus={this.props.updateUserStatus}
                         isOwner={this.props.match.params.userId === undefined}
                         onSavePhoto={this.onSavePhoto}
                         saveProfile={this.props.saveProfile}/>

            </div>
        )
    }
}
let mapStateToProps = (state) => {
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