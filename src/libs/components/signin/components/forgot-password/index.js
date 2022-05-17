import React from 'react';
import { RESET_PASSWORD } from 'libs/components/signin/constants/SigninGqlQueries'
import Content from './components/content';


const ForgotPassword = () => {
    return (
        <Content
        gqlMutation={RESET_PASSWORD}
        />
    );
};

export default ForgotPassword