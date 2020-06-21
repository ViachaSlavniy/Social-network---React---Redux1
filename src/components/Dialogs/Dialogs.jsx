import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.dialogId;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
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
        {id: 5, name: 'Sergey'},

    ];

    let messagesData = [
        {message: "Hello!"},
        {message: "How are you?"},
        {message: "Let's go to train"}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} dialogId={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} dialogId={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;