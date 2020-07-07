import React from 'react';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/* const DialogsContainer = (props) => {
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
*/
let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;