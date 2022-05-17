import React, { useState } from 'react';
import FieldInput from 'libs/components/fieldinput'
import { isValidEmail, isErrorCode } from '../../../../utils'
import Form from 'libs/components/form'
import Button from 'libs/components/button'
import { useMutation } from '@apollo/react-hooks'
import GrayDiv from 'libs/components/gray-div'
import Card from 'libs/components/card'
import Container from 'libs/components/container'
import Alert from 'libs/components/alert'
import SuccessAlert from 'libs/components/alert/success';
import ErrorAlert from 'libs/components/alert/error';



const Content = ({ gqlMutation, additionalVariables,narrowContainer=true, aff, intl}) => {
    const [email, setEmail] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [showError, setShowError] = useState(false)
    const [emailNonExist, setEmailNonExist] = useState(false)

    const [success, setSuccess] = useState(false)

    const [resetPassword, { loading }] = useMutation(gqlMutation, {
        onError: (error) => {
            if (isErrorCode(error, 3)) {
                setEmailNonExist(true)
            } else {
                setShowError(true)
            }
        },
        onCompleted: (data) => setSuccess(true)
    })


    const handleFormSubmit = () => {
        let error = false


        if (!isValidEmail(email)) {
            setInvalidEmail(true)
            error = true
        }

        if (!error) {
            setEmailNonExist(false)
            setShowError(false)

            const variables = additionalVariables ? { email, ...additionalVariables } : { email }

            resetPassword({
                variables
            })
        }
    }

    return (
        <GrayDiv
            tailwind='min-h-screen w-full'
            id='wrapper-forgot-password '>
            <Container
                tailwind='flex flex-col items-center justify-center w-full'
                narrow={narrowContainer}>
                {success ?

                    <SuccessAlert
                        fullScreen
                        id='success'
                        isShown={true}
                        showDismiss={false}
                        content= {aff ? intl.formatMessage({id: "reset.success.content"}) : "sent reset email"}
                    />
                    :
                    <>
                    <ErrorAlert
                    aff={aff}
                    isShown={showError}
                    id='error'
                    />

                        <Alert
                            isShown={emailNonExist}
                            variant='warning'
                            id='non-exist'
                            content={aff ? intl.formatMessage({id: "reset.alert.content"}) : 'the account does not exist'}
                        />

                        <Card tailwind='p-8 w-full mt-2'>
                            <Form
                                id='form'
                                onSubmit={handleFormSubmit}>
                                <FieldInput
                                    helpText={!invalidEmail ? '' : aff ? intl.formatMessage({id: "form.helpText.email"}) : 'invalid email address'}
                                    aff={aff}
                                    id='email'
                                    tailwind=''
                                    onChange={(value) => setEmail(value)}
                                    label={aff ? intl.formatMessage({id: "form.label.email"}) : "Email address"}
                                    type='email'
                                />


                                <Button
                                    id='submit'
                                    typeSubmit
                                    loading={loading}
                                    tailwind='mt-4 w-full'
                                >
                                    {aff ? intl.formatMessage({id: "reset.button"})  : 'Reset Password'}
                                </Button>
                            </Form>
                        </Card>

                    </>
                }
            </Container>
        </GrayDiv>
    );
};

export default Content