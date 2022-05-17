import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContent from '../../content'
import Icon from 'libs/components/icon'
import Wrapper from 'libs/components/wrapper'
import Alert from 'libs/components/alert'
import Text from 'libs/components/text'
import useRegister from '../hooks/useRegister';
import colors from "../../../../theme/colors";
import { Link, useHistory } from 'react-router-dom'
import Button from 'libs/components/button'

const Content = ({ logoIcon, onRegister, onRegisterPath, title, subtitle,submitText}) => {
    const [showAlreadyExists, setShowAlreadyExists] = useState(false)
    const [showError, setShowError] = useState(false)

    const history = useHistory()

    const { register, loading } = useRegister(
        onRegister,
        () => setShowError(true),
        () => setShowAlreadyExists(true),
        onRegisterPath)

    const handleSubmit = (email, password) => {
        setShowAlreadyExists(false)
        setShowError(false)

        register(email, password)
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <Icon size
                png
                hasBackground={false}
                src={logoIcon}
                tailwind='w-16 h-16'
                round={false} />

            {/*<Text*/}
            {/*    tailwind='mb-8'*/}
            {/*    type='heading'>Create a new account</Text>*/}
            <Text
                tailwind='mb-2'
                type='heading'>{title}</Text>
            <Text
                tailwind='mb-8'
                type='headingSmall'>{subtitle}</Text>

            <Alert
                content='The email address already exists'
                variant='warning'
                id='already-exists'
                isShown={showAlreadyExists} />

            <div className='w-full'>
                <FormContent
                    id='signup'
                    showError={showError}
                    loading={loading}
                    submitText={submitText}
                    showForgotPassword={false}
                    onSubmit={handleSubmit} />

                <div className='flex items-center mt-10'>
                    <Text
                        tailwind=''
                        type='headingSmall'>Have an account already?
                </Text>
                    <Button
                    padding
                    size
                        tailwind='text-indigo-600 hover:text-indigo-500 px-2'
                        onClick={() => history.push('/login')}
                        variant='text'>
                        Login here
                    </Button>
                </div>
            </div>
        </div>
    );
};

Content.propTypes = {
    logoIcon: PropTypes.object,
};

export default Content;
