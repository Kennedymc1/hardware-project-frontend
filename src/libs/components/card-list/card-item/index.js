import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ showBorder, children, tailwind, className, id, onClick }) => {

    return (
        <li 
        onClick={onClick}
        data-testid={id}>
            

                <div className={`flex w-full ${showBorder && 'border-t'} 
            border-gray-200 transition duration-150  ${tailwind} ${className}`}>
                    {children}
                </div>
        </li>
    );
};

CardItem.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
};

export default CardItem;