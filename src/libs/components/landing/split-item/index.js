import React from 'react';
import PropTypes from 'prop-types';

const SplitItem = ({ children, tailwind,className,alt}) => {
    return (
        <div className={`flex ${alt ? 'flex-col-reverse': 'flex-col'}
         relative w-full px-4 md:px-8 pt-4 md:grid md:grid-cols-2 md:items-center
         ${tailwind} ${className}`}>
            {children}
        </div>
    );
};

SplitItem.propTypes = {

};

export default SplitItem;