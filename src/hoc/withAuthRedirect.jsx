import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(this.props.isAuth) { return <Component {...this.props}/>}
            return <Redirect to={'/login'}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}

