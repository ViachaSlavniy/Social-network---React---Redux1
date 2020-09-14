import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Elem} from "../Common/FormControls/FormControls";
import {required} from "../../redux/helpers/validators";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormControls/FormControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Elem} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Elem} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component='input'/>Remember me
            </div>
            {props.error && <div className={s.borderError + ' ' + s.error}>{props.error}</div>}
            {props.captchaUrl
                ? <div>
                    <div>
                        <img src={props.captchaUrl}/>
                    </div>
                    <Field name={'captcha'} component={Elem} type="text" placeholder={'Captcha...'}/>
                </div>
                : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}


export default Login;