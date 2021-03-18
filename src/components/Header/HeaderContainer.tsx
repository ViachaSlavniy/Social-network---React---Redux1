import React from 'react';
import Header from "./Header";
import {logout} from "../../redux/auth-reducer"; 
import {connect} from "react-redux";
import { AppStateType } from '../../redux/redux-store';

type PropsType = {

}


class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);