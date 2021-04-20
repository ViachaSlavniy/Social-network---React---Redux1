import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Elem} from "../../../Common/FormControls/FormControls";
import {required} from "../../../../redux/helpers/validators";
import s from "../../../Common/FormControls/FormControls.module.css";

type LoginFormOwnProps = {
    captchaUrl: string | null
}
export type LoginFormValuesType = {
    captcha: string | null
    rememberMe: boolean
    email: string
    password: string
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {error, handleSubmit, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Elem} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Elem}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component='input'/>Remember me
            </div>
            {error && <div className={s.borderError + ' ' + s.error}>{error}</div>}
            {captchaUrl
            && <div>
                <div>
                    <img src={captchaUrl} alt="captcha"/>
                </div>
                <Field name={'captcha'} component={Elem} type="text" placeholder={'Captcha...'}/>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);