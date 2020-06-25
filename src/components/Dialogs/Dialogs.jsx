import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} dialogId={d.id} img={d.img}/>);
    let messagesElements = props.state.messagesData.map(m => <Messages img={m.img} message={m.message}/>);

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
                        <textarea className={s.messageArea} placeholder="Write to message..."></textarea>
                    </div>
                    <div>
                        <button className={s.messageBtn}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;