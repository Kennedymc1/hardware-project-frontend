import React from 'react';
import { IS_PASSWORD_RESET_VALID, CHANGE_TOKEN_PASSWORD } from '../../constants/SigninGqlQueries'
import Content from './components/content';

const ResetPassword = () => {

    return (
        <Content
            gqlQueryIsPasswordValid={IS_PASSWORD_RESET_VALID}
            gqlMutationChangeTokenPassword={CHANGE_TOKEN_PASSWORD}
            processData={data=> data.isPasswordResetValid}
        />
    );
};

export default ResetPassword;