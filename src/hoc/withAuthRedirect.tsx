import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsFromRedirect = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {
}

export function withAuthRedirectComponent <WCP>(WrappedComponent:React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<DispatchPropsType & MapPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (props.isAuth) {
            return <WrappedComponent {...restProps as WCP}/>
        }
        return <Redirect to={'/login'}/>
    }

    let ConnectedRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>
    (mapStateToPropsFromRedirect, {})(RedirectComponent)

    return ConnectedRedirectComponent
}

