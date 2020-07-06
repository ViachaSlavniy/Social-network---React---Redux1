import React from 'react';
import s from './Dialogs.module.css';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return <StoreContext>
            {
                (store) => {
                    let state = store.getState();

                    let addNewMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(onMessageChangeActionCreator(text));
                    }
                    return <Dialogs dialogsData={state.messagesPage.dialogsData}
                                    messagesData={state.messagesPage.messagesData}
                                    newMessageText={state.messagesPage.newMessageText}
                                    updateNewMessageText={onMessageChange}
                                    addNewMessage={addNewMessage}
                    />
                }
            }
        </StoreContext>
}

export default DialogsContainer;