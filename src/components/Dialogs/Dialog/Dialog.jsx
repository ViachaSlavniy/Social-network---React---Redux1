import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.dialogId;
    return (
        <div className={s.dialogItem}>
            <NavLink className={s.dialogLink} to={path}>
                <img className={s.userAva} src={props.img}/>{props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;