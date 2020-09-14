import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

    render() {
       return <Login login={this.props.login}
                     isAuth={this.props.isAuth}
                     captchaUrl={this.props.captchaUrl}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect(mapStateToProps, {login})(LoginContainer);