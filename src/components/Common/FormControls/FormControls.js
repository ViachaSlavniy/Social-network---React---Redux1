import React from "react";
import s from "./FormControls.module.css"

export const Elem = ({input, meta, ...props}) => {
    return (
        <div>
            <div>
                {props.typeOfField === 'textarea'
                    ? <textarea className={ (meta.touched && meta.error && s.borderError) + " " + s.textArea} {...input} {...props}/>
                    : <input className={meta.touched && meta.error && s.borderError} {...input} {...props}/>}
            </div>
            <div>
                {meta.touched && meta.error && <span className={s.error}>{meta.error}</span>}
            </div>
        </div>
    )
}