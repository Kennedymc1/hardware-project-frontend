import React from 'react';

import Header from '../components/header';
import Card from 'libs/components/card';
import Login from '../components/login';
import Container from 'libs/components/container';

const Simple = ({ logoIcon, getStartedFree, onLogin, trialDays}) => {
    return (
        <Container
            narrow
            tailwind='flex flex-col items-center'>

            <Header
                trialDays={trialDays}
                getStartedFree={getStartedFree}
                logoIcon={logoIcon}
                tailwind='items-center mb-8' />

            <Card
                tailwind='w-full p-8 max-w-lg border border-gray-300'
            >

                <Login
                    onLogin={onLogin}
                    getStartedFree={getStartedFree} />
            </Card>

        </Container>
    );
};

export default Simple;