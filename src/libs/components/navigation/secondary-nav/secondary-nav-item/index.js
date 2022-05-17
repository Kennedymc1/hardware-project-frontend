import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text';

const SecondaryNavItem = ({ onSelected, children, isSelected,tailwind, className, variant}) => {
    let selectedBg 
    let selectedColor
    let notSelectedBg 
    let notSelectedColor
    let hoverBg 
    let hoverColor 

    if(variant === 'dark'){
        selectedBg = ' bg-gray-900'
        selectedColor = ' text-gray-100'
        notSelectedBg = 'bg-transparent'
        notSelectedColor = ' text-gray-200'
        hoverBg = ' hover:bg-gray-800'
        hoverColor = ' hover:text-gray-100'
    }else{
         selectedBg = ' bg-gray-300'
         selectedColor = ' text-gray-800'
         notSelectedBg = 'bg-transparent'
         notSelectedColor = ' text-gray-600'
         hoverBg = ' hover:bg-gray-200'
         hoverColor = ' hover:text-gray-700'
    }

    return (
        <div className={`w-full cursor-pointer px-3 flex py-2 my-1 rounded-md mx-2 
      transition duration-150 ${notSelectedBg} 
      ${isSelected ? selectedBg + selectedColor : notSelectedColor + hoverColor + hoverBg}
      ${tailwind} ${className} `}
            onClick={onSelected}

        >
            <Text
                color
                tailwind={`capitalize font-medium w-full`}> {children} </Text>

        </div>
    );
};

SecondaryNavItem.defaultProps = {
    isSelected: false,
    variant: 'light'
}
SecondaryNavItem.propTypes = {
    variant :PropTypes.oneOf(['light' , 'dark']),
    onClick: PropTypes.func,
};

export default SecondaryNavItem;