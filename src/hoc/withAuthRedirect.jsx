import React from "react";
import {Redirect} from "react-router-dom";

let AuthRedirectComponent = (component) => {

    if(!props.isAuth) { return <Redirect to={'/login'}/>}
    return component
}