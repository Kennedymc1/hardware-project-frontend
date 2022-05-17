import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../text';

/**
 * the secondary nav gets added as a child inside inside the navigation 
 * component
 */
const SecondaryNav = ({ title, children }) => {
   

    return (
        <div className='pt-6'>
            <Text 
            color
            tailwind='uppercase font-medium text-sm text-gray-500 p-2'>{title}</Text>

{children}
        </div>
    );
};


SecondaryNav.propTypes = {
    title: PropTypes.string,
};

export default SecondaryNav;