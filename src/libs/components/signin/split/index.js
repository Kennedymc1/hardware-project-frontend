import React from 'react';
import Header from '../components/header';
import Login from '../components/login';
import Container from '../../container';
import Simple from '../simple'
import PropTypes from 'prop-types'

const Split = ({ loginImage, logoIcon, getStartedFree, onLogin, trialDays }) => {

    return (
        <div data-testid='wrapper-register'
            className='min-h-screen w-full'>
            < div className='hidden md:grid grid-cols-2 min-h-screen w-full' >

                <Container >
                    <div className='px-16 flex flex-col items-center justify-center w-full'>

                        <Header
                            logoIcon={logoIcon}
                            trialDays={trialDays}
                            getStartedFree={getStartedFree}
                            tailwind='items-center mb-8 ' />
                        
                        <Login
                            onLogin={onLogin}
                        />
                    </div>
                </Container>


                <div>
                    <img
                        className='w-full object-cover h-full'
                        src={loginImage} />
                </div>
            </div >


            <div className='md:hidden'>
                <Simple
                    trialDays={trialDays}
                    onLogin={onLogin}
                    getStartedFree={getStartedFree}
                    logoIcon={logoIcon}
                />

            </div>


        </div>


    );
};

Split.propTpes = {
    loginImage: PropTypes.string,
    logoIcon: PropTypes.object,

}

export default Split;