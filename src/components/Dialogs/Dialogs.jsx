import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.messagesPage.dialogsData.map(d => <Dialog name={d.name} dialogId={d.id} img={d.img}/>);
    let messagesElements = props.state.messagesPage.messagesData.map(m => <Messages img={m.img} message={m.message}/>);

    let messageInfo = React.createRef();
    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = messageInfo.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesBlock}>
                    {messagesElements}
                </div>
                <div className={s.areaWrapper}>
                    <div>
                        <textarea onChange={onMessageChange} className={s.messageArea} ref={messageInfo}
                                  value={props.state.messagesPage.newMessageText} placeholder="Write message..."/>
                    </div>
                    <div>
                        <button onClick={addNewMessage} className={s.messageBtn}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;