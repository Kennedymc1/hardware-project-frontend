import React, { useState } from 'react';
import Content from './content'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Card from 'libs/components/card'
import Container from 'libs/components/container'

const GrayDiv = styled.div`
background-color: ${({ theme }) => theme.gray50};
`

//todo does this handle an empty email and password inputs//posibly share code with
//login component
const Register = ({ logoIcon, registerImage, onRegister,onRegisterPath, title, subtitle, submitText }) => {

    return (
        <div data-testid='wrapper-register'
            className='min-h-screen w-full'>
            < div className='hidden md:grid grid-cols-2 min-h-screen w-full' >

                <Container >
                    <div className='px-16 flex items-center justify-center w-full'>
                        <Content
                        onRegisterPath={onRegisterPath}
                            onRegister={onRegister}
                            logoIcon={logoIcon}
                            registerImage={registerImage}
                        title={title}
                        subtitle={subtitle}
                        submitText={submitText}
                        />
                    </div>
                </Container>


                <div>
                    <img
                        className='w-full object-cover h-full'
                        src={registerImage} />
                </div>
            </div >


            <GrayDiv
                className='flex items-center justify-center min-h-screen md:hidden w-full px-6 py-6 md:px-48'
                id='wrapper-register'>

                <Card
                    tailwind='w-full p-8 pt-12 max-w-lg border border-gray-300'
                >
                    <div>
                        <Content
                        onRegisterPath={onRegisterPath}
                            logoIcon={logoIcon}
                            registerImage={registerImage}
                            onRegister={onRegister}
                        />

                    </div>
                </Card>
            </GrayDiv>


        </div>
    );
};

Register.propTypes = {
    logoIcon: PropTypes.object,
    registerImage: PropTypes.string,
    onRegister: PropTypes.func,
}
export default Register;
