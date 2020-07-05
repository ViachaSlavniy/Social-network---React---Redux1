import React from 'react';
import s from './Dialogs.module.css';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <Dialogs dialogsData={state.messagesPage.dialogsData}
                 messagesData={state.messagesPage.messagesData}
                 newMessageText={state.messagesPage.newMessageText}
                 updateNewMessageText={onMessageChange}
                 addNewMessage={addNewMessage}
        />
    )
}

export default DialogsContainer;