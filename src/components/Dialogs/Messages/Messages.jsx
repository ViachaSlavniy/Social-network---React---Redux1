import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {

    return (
        <div className={s.message}>
            <img className={s.userAva} src={props.img} alt="avatar"/>{props.message}
        </div>
    )
}

export default Messages;