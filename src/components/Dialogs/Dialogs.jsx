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

    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} dialogId={dialogsData[0].id}/>
                <Dialog name="Viacheslav" dialogId="2"/>
                <Dialog name="Michael" dialogId="3"/>
                <Dialog name="Igor" dialogId="4"/>
                <Dialog name="Sergey" dialogId="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello!"/>
                <Message message="How are you?"/>
                <Message message="Let's go to train!"/>
            </div>
        </div>
    )
}

export default Dialogs;