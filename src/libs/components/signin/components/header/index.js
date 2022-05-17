import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'libs/components/icon'
import Text from 'libs/components/text'
import { Link } from 'react-router-dom'
import Button from 'libs/components/button'

const Header = ({ tailwind, logoIcon ,getStartedFree,trialDays}) => {
    return (
        <div className={`flex flex-col ${tailwind}`}>
            <Icon
                size
                png
                src={logoIcon}
                hasBackground={false}
                tailwind='w-16 h-16'
                round={false} />

            <Text type='heading'>Sign in to your account</Text>

            <Text type='text-extra-small'>Or </Text>

            <Link to='/create-account'>
                <Button
                    color
                    hover
                    id='signup'
                    tailwind='text-indigo-600 hover:text-indigo-500'
                    variant='text'>{getStartedFree ? 'Get started for free' : `Create an account`}</Button>
            </Link>

        </div>
    );
};

Header.propTypes = {
    logoIcon: PropTypes.object,


};

export default Header;