import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FieldInput from 'libs/components/fieldinput'
import CheckBox from 'libs/components/checkbox'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Wrapper from 'libs/components/wrapper'
import Form from 'libs/components/form'
import Social from './social';
import { isValidPassword, isValidEmail } from '../../utils'
import { Link, useHistory } from 'react-router-dom'
import ErrorAlert from '../alert/error';
import Alert from 'libs/components/alert'


const Content = (props) => {
    const [termsChecked, setTermsChecked] = useState(false)
    const [showTermsError, setShowTermsError] = useState(false)



    const { onSubmit, loading, showWrongPassword,
        showError, submitText, showNameField, showPasswordField
        , showForgotPassword, forgotPasswordPath, termsText,
        showTerms, aff, showWrongAffiliateProgram } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shortPassword, setShortPassword] = useState(false)
    const [shortName, setShortName] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)

    const handleFormSubmit = (e) => {
        let error = false
        setShortPassword(false)
        setInvalidEmail(false)
        setShortName(false)
        setShowTermsError(false)

        if (showNameField && (name.trim() === '')) {
            setShortName(true)
            error = true
        }
        if (showPasswordField && !isValidPassword(password)) {
            setShortPassword(true)
            error = true
        }
        if (!isValidEmail(email)) {
            setInvalidEmail(true)
            error = true
        }

        if (showTerms && !termsChecked) {
            setShowTermsError(true)
            error = true
        }


        if (!error) {
            showNameField ? onSubmit(name.trim(), email, password) : onSubmit(email, password)
        }
    }
    //TODO there should be a logo on this screen

    return (
        
        <Wrapper id='' tailwind='w-full'>
        
            <Form id={props.id} onSubmit={handleFormSubmit}>

                <Alert
                id='wrong-affiliate'
                content={'Affiliate program is not found. Please enter correct domain name'}
                isShown={showWrongAffiliateProgram} />

                <Alert
                id='wrong-password'
                content={aff ? props.intl.formatMessage({id: "form.alert.wrongPassword"}) : 'Username and password do not match'}
                isShown={showWrongAffiliateProgram? false : showWrongPassword} />
               

                {/* CHANGE LANGUAGE */}
                <ErrorAlert
                    toRight={true}
                    aff={aff}
                    id='error'
                    isShown={showError} />

                {showNameField && 
                    <FieldInput
                        aff={aff}
                        helpText={!shortName ? '' : aff ?props.intl.formatMessage({id:"form.helpText.name"}): 'Name cannot be blank'}
                        onChange={(value) => setName(value)}
                        tailwind='mb-8'
                        id='name-input'
                        label={aff ? props.intl.formatMessage({id: "form.label.name"}) : 'Name'}
                    />
                   
                }

                <FieldInput
                    // helpText={invalidEmail ? props.intl.formatMessage({id: "form.helpText.email"}) : ''}
                    aff={aff}
                    helpText={!invalidEmail ? '' : aff ? props.intl.formatMessage({id: "form.helpText.email"}) : 'invalid email address'}
                    id='email-input'
                    tailwind=''
                    onChange={(value) => setEmail(value)}
                    label= {aff ? props.intl.formatMessage({id: "form.label.email"}) : "Email address"}
                    type='email'
                />

                {showPasswordField &&
                    <FieldInput
                        // helpText={shortPassword ? 'minimum 6 characters' : ''}
                        aff={aff}
                        helpText={!shortPassword ? '' : aff ? props.intl.formatMessage({id: "form.helpText.shortPassword"}) : 'minimum 6 characters' }
                        onChange={(value) => setPassword(value)}
                        tailwind='mt-8'
                        id='password-input'
                        label= {aff ? props.intl.formatMessage({id: "form.label.password"}) : 'Password'}
                        type='password'
                    />
                }
                {showForgotPassword &&
                    <div className='flex justify-right items-center mt-4'>

                        <Link to={forgotPasswordPath} >
                            <Button
                                color
                                hover
                                id='forgot-password'
                                size='small'
                                tailwind='text-indigo-600 hover:text-indigo-500'
                                variant='text'>
                                {/* Forgot your password? */}
                                {aff ? props.intl.formatMessage({id: "login.forgotPassword"}) : 'Forgot your password?'}
                </Button>
                        </Link>
                    </div>
                }

                {showTerms &&
                    <div className="flex items-center mt-4">
                        <CheckBox
                            aff={true}
                            showError={showTermsError}
                            value={termsChecked}
                            onToggle={value => {
                                setTermsChecked(value)
                                setShowTermsError(false)
                            }
                            }
                            label={termsText}
                        />
                    </div>
                }

                <Button
                    id='login'
                    typeSubmit
                    loading={loading}
                    tailwind={` w-full mt-8`}
                >{submitText}</Button>

                <div className={
                    ' justify-evenly items-center mt-4 hidden '//+'flex'
                }>
                    <div className='h-px bg-gray-300 w-full' />

                    <div className='w-full px-2 '>
                        <Text type='text-extra-small'
                            tailwind='whitespace-no-wrap text-center px-0'>
                                Or continue with
                                </Text>
                    </div>
                    <div className='h-px bg-gray-300 w-full' />
                </div>


                <Social tailwind='hidden' />
            </Form>

        </Wrapper>
    );
};

Content.defaultProps = {
    showWrongPassword: false,
    showForgotPassword: false,
    showError: false,
    showPasswordField: true,
    showNameField: false,
    forgotPasswordPath: '/forgot-password/'


}

Content.propTypes = {
    onSubmit: PropTypes.func,
    loading: PropTypes.bool,
    submitText: PropTypes.string,

};

export default Content;
