import React, {FC} from "react";
import {WrappedFieldProps} from 'redux-form';
import s from "./FormControls.module.css";

type ElemType = WrappedFieldProps;
type ElemOwnPropsType = {
    typefield: string
}

export const Elem: FC<ElemType & ElemOwnPropsType> = ({input, meta, ...props}) => {
    return (
        <div>
            <div>
                {props.typefield === 'textarea'
                    ? <textarea className={ (meta.touched && meta.error ? s.borderError : '') + " " + s.textArea} {...input} {...props}/>
                    : <input className={meta.touched && meta.error ? s.borderError : ''} {...input} {...props}/>}
            </div>
            <div>
                {meta.touched && meta.error && <span className={s.error}>{meta.error}</span>}
            </div>
        </div>
    )
}