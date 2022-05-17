import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'
import Button from 'libs/components/button'
import Alert from 'libs/components/alert'
import { SEND_MESSAGE } from '../constants/GqlQueries';
import ErrorAlert from 'libs/components/alert/error';
import { useMutation } from '@apollo/client';

const SupportForm = ({ title, email, onSendMessage }) => {
    const [emailString, setEmailString] = useState(email)
    const [content, setContent] = useState('')

    const [emptyContent, setEmptyContent] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [showError, setShowError] = useState(false)

    const [sendMessage, { data, error, loading }] = useMutation(SEND_MESSAGE, {
        onError: () => { },
        onCompleted: () => {
            onSendMessage && onSendMessage()
        }
    })

    console.log({loading})
    
    useEffect(() => {
        setShowError(error ? true : false)
    }, [error])

    const handleFormSubmit = () => {
        setShowError(false)

        let error = false
        if (emailString.length === 0) {
            setEmptyEmail(true)
            error = true
        }

        if (content.length === 0) {
            setEmptyContent(true)
            error = true
        }

        if (!error) {
            setEmptyEmail(false)
            setEmptyContent(false)

            sendMessage({
                variables: {
                    content,
                    email: emailString
                }
            })
        }
    }


    return (
        <div>



            <Card
                tailwind='p-8'
            >
                <Text
                    tailwind='mb-2'
                    type='heading'
                >{title}</Text>

                <Text tailwind='my-4'>Please get in touch with any questions and thoughts, we'll get back to you as soon as possible!</Text>

                <Form onSubmit={handleFormSubmit}>


                    <FieldInput
                        tailwind='mb-4'
                        helpText={emptyContent ? 'message cannot be empty' : ''}
                        id='message-input'
                        value={content}
                        element='text-area'
                        onChange={(value) => {
                            value.length === 0 ? setEmptyContent(true) : setEmptyContent(false)
                            setContent(value)
                        }}
                    />

                    <FieldInput
                        helpText={emptyEmail ? 'email cannot be empty' : ''}
                        id='email-input'
                        onChange={(value) => {
                            value.length === 0 ? setEmptyEmail(true) : setEmptyEmail(false)
                            setEmailString(value)
                        }}
                        label='Your email'
                        value={emailString}
                        placeholder='example@email.com'
                    />

                    {data &&

                        <Alert
                            variant='success'
                            tailwind='my-4'
                            id='success'
                            isShown={data.sendMessage}
                            content='sent!'
                        />
                    }

                    <ErrorAlert
                    tailwind='mt-8'
                        isShown={showError}
                    />

                    <Button
                        loading={loading}
                        tailwind='mt-6 w-full'
                        id='submit'
                        typeSubmit
                    >Send</Button>
                </Form>


            </Card>

        </div>
    );
};

SupportForm.defaultProps = {
    email: ''
}

SupportForm.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SupportForm;