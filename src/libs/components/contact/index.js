import React from 'react';
import PropTypes from 'prop-types';
import SupportForm from './form'
import Button from 'libs/components/button'
import Wrapper from 'libs/components/wrapper'
import Container from 'libs/components/container'
import Header from './header'

const Contact = ({ logo, onGetStarted, onLogin, footer, showLogin, showGetStarted, getStartedText }) => {

    return (
        <div>
            <Wrapper tailwind='sm:p-6' >
                <Header
                showLogin={showLogin}
                showGetStarted={showGetStarted}
                getStartedText={getStartedText}
                onLogin={onLogin}
                onGetStarted={onGetStarted}
                logo={logo}
                />
                <Container
                    narrow
                    className='mt-8'>
                    <SupportForm
                        title='Contact us' />
                </Container>

            </Wrapper>

            {footer}
        </div>
    );
};

Contact.defaultProps = {
    showLogin: true,
    showGetStarted: true,
    getStartedText: 'Start free trial'
}
Contact.propTypes = {

};

export default Contact;