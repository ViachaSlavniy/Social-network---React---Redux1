import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Elem} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../redux/helpers/validators";
import { DialogType, MessageType } from '../../types/types';

const maxLength = maxLengthCreator(50);

type PropsType = {

}

const DialogsForm:React.FC<InjectedFormProps<DialogFormValuesType, PropsType> & PropsType> = (props) => {
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
const DialogsReduxForm = reduxForm<DialogFormValuesType>({form: 'dialogs'})(DialogsForm);

type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    addNewMessage: (message: string) => void
}

type DialogFormValuesType = {
    message: string
}

const Dialogs:React.FC<DialogsType> = (props) => {
    const dialogsElements = props.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} img={d.img}/>);
    const messagesElements = props.messagesData.map(m => <Messages key={m.id} id={m.id} img={m.img} message={m.message}/>);

    const onSubmit = (values:DialogFormValuesType) => {
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
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}





export default Dialogs;