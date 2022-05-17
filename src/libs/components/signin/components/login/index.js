import React, { useState } from 'react';
import Content from '../content'
import useLogin from './useLogin'
import { isErrorCode } from '../../utils';

const Login = ({ onLogin }) => {
    const [showWrongPassword, setShowWrongPassword] = useState(false)
    const [showError, setShowError] = useState(false)

    const { login, loading } = useLogin(onLogin,(error) => {
        if (isErrorCode(error, 9)) {
            setShowWrongPassword(true)
        } else {
            setShowError(true)
        }
    })

    const handleSubmit = (email, password) => {
        setShowWrongPassword(false)
        setShowError(false)

        login(email, password)
    }
    return (
        <Content
            showError={showError}
            showWrongPassword={showWrongPassword}
            loading={loading}
            submitText='Sign in'
            showForgotPassword={true}
            onSubmit={handleSubmit} />
    );
};

export default Login;