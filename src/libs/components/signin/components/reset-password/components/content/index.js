import React, { useState } from 'react';
import Wrapper from 'libs/components/wrapper'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useLocation } from 'react-router-dom'
import { isValidPassword } from '../../../../utils'
import Form from 'libs/components/form'
import Button from 'libs/components/button'
import FieldInput from 'libs/components/fieldinput'
import ErrorAlert from 'libs/components/alert/error';
import Alert from 'libs/components/alert'
import GrayDiv from 'libs/components/gray-div'
import Container from 'libs/components/container'
import Card from 'libs/components/card'

const Content = ({ gqlQueryIsPasswordValid, gqlMutationChangeTokenPassword,changeTokenPasswordAdditionalVariables,
     isPasswodValidAdditionalVariables, processData, narrowContainer = true }) => {
    const [showError, setShowError] = useState()
    const [showInvalid, setShowInvalid] = useState()

    const [showChangePasswordError, setShowChangePasswordError] = useState()
    const [success, setSuccess] = useState()

    const [shortPassword, setShortPassword] = useState(false)
    const [password, setPassword] = useState('')

    const location = useLocation()

    const splitStrings = location.pathname.split('/')
    const token = splitStrings[splitStrings.length - 1]

    const { loading: isPasswordResetValidLoading } = useQuery(gqlQueryIsPasswordValid, {
        variables: isPasswodValidAdditionalVariables ? { token, ...isPasswodValidAdditionalVariables } : { token },
        onError: () => setShowError(true),
        onCompleted: (data) => {
            if (data && processData(data)) {

            } else {
                setShowInvalid(true)
            }
        }
    })

    const [changePassword, { loading: changePasswordLoading }] = useMutation(gqlMutationChangeTokenPassword, {
        onError: () => setShowChangePasswordError(true),
        onCompleted: (data) => setSuccess(true)
    })

    const handleFormSubmit = () => {
        let error = false

        if (!isValidPassword(password)) {
            setShortPassword(true)
            error = true
        }

        if (!error) {
            setShortPassword(false)

            const variables = changeTokenPasswordAdditionalVariables ? { password, token, ...changeTokenPasswordAdditionalVariables } : { password, token }

            changePassword({
                variables
            })
        }
    }

    return (

        <GrayDiv
            tailwind='min-h-screen w-full'>
            <Container
                tailwind='flex flex-col items-center justify-center w-full'
                narrow={narrowContainer}>
                {isPasswordResetValidLoading ?

                    <Wrapper id='screen-loading'>
                    </Wrapper>
                    :
                    showError ?
                        <Wrapper id='error'>
                            <ErrorAlert
                                isShown={true}
                            />
                        </Wrapper>
                        :
                        showInvalid ?
                            <Wrapper
                                tailwind='w-full flex justify-center items-center'
                                id='invalid'>
                                <Alert
                                    isShown={true}
                                    variant='warning'
                                    content='Invalid link'
                                />
                            </Wrapper>
                            :
                            success ?
                                <Wrapper id='success'>
                                    <Alert
                                        variant='success'
                                        tailwind='w-full flex justify-center items-center'
                                        isShown={true}
                                        content='Reset password success'
                                    />
                                </Wrapper>

                                :
                                <>
                                    <Wrapper
                                        tailwind='w-full'
                                        id='content'>
                                        {showChangePasswordError &&

                                            <Wrapper id='change-password-error'>
                                                <ErrorAlert
                                                    isShown={true}
                                                />
                                            </Wrapper>
                                        }

                                        <Card tailwind='p-8 w-full mt-2'>

                                            <Form onSubmit={handleFormSubmit}>

                                                <FieldInput
                                                    helpText={shortPassword ? 'minimum 6 characters' : ''}
                                                    onChange={(value) => setPassword(value)}
                                                    tailwind=''
                                                    id='password'
                                                    label='New Password'
                                                    type='password'
                                                />

                                                <Button
                                                    id='submit'
                                                    typeSubmit
                                                    loading={changePasswordLoading}
                                                    tailwind='mt-4 w-full'
                                                >Submit</Button>
                                            </Form>
                                        </Card>
                                    </Wrapper>
                                </>
                }
            </Container>
        </GrayDiv>


    );
};

export default Content;