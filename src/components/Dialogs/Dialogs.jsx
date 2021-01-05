import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Elem} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../redux/helpers/validators";

const maxLength = maxLengthCreator(50);

let DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.areaWrapper}>
            <div>
                <Field  name={'message'}
                        component={Elem}
                        placeholder="Write message..."
                        validate={[required, maxLength]}
                        typeOfField={'textarea'}/>
            </div>
            <div>
                <button className={s.messageBtn}>Send message</button>
            </div>
        </form>
    )
}

let DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <Dialog key={d.id} name={d.name} dialogId={d.id} img={d.img}/>);
    let messagesElements = props.messagesData.map(m => <Messages key={m.id} img={m.img} message={m.message}/>);

    let addNewMessage = (values) => {
        props.addNewMessage(values.message);
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
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}





export default Dialogs;