import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.dialogId;
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialogsColor} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Viacheslav'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Sergey'}

    ];

    let messagesData = [
        {message: "Hello!"},
        {message: "How are you?"},
        {message: "Let's go to train"},
        {message: "I'm fine"},
        {message: "UUUU ska"}
    ];

    let dialogsElements = dialogsData.map(d => <Dialog name={d.name} dialogId={d.id}/>);
    let messagesElements = messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;