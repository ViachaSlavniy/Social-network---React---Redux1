import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Elem} from "../Common/FormControls/FormControls";
import {required} from "../../redux/helpers/validators";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormControls/FormControls.module.css"

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {error, handleSubmit, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Elem} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Elem} validate={[required]}/>
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

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type LoginType = {
    captchaUrl: string | null
    isAuth: boolean
    login: (email:string, password:string, rememberMe:boolean, captcha:string | null) => void
}

type LoginFormValuesType = {
    captcha: string | null
    rememberMe: boolean
    email: string
    password: string
}

// type LoginFormKeysType = Extract<keyof LoginFormValuesType, string>

const Login:React.FC<LoginType> = (props) => {
    const onSubmit = (formData:LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm 
                onSubmit={onSubmit}
                captchaUrl={props.captchaUrl}
            />
        </div>
    )
}


export default Login;