import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from '../../../types/types';

const Dialog:React.FC<DialogType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink className={s.dialogLink} to={path}>
                <img className={s.userAva} src={props.img} alt="avatar"/>{props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;