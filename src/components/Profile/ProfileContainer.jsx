import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import s from './Profile.module.css';
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
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

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         userStatus={this.props.userStatus}
                         updateStatus={this.props.updateUserStatus}/>
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
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirectComponent
)(ProfileContainer);