import React from 'react'
import PropTypes from 'prop-types';
import Button from 'libs/components/button'

const Header = ({ showLogin, showGetStarted, getStartedText,onGetStarted,onLogin,logo }) => {
    return (
        <div className='flex justify-between items-center px-2 md:px-6 py-4'>
            {logo}

            <div className='flex'>
                {showLogin &&
                    <Button
                        onClick={onLogin}
                        variant='text'>Login</Button>
                }

                {showGetStarted &&
                    <Button
                        onClick={onGetStarted}
                    >
                        {getStartedText}
                    </Button>
                }

            </div>
        </div>
    )
}

Header.defaultProps = {
    showLogin: true,
    showGetStarted: true,
    getStartedText: 'Start free trial'
}

Header.propTypes = {

};

export default Header;