import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.dialogId;
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialogsColor} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;