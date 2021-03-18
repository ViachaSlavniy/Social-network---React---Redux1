import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type OwnPropsType = {

}

type PropType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class LoginContainer extends React.Component<PropType> {

    render() {
       return <Login login={this.props.login}
                     isAuth={this.props.isAuth}
                     captchaUrl={this.props.captchaUrl}/>
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect <MapStatePropsType,
    MapDispatchPropsType,
    OwnPropsType,
    AppStateType
    >
    (mapStateToProps,{login})
(LoginContainer);