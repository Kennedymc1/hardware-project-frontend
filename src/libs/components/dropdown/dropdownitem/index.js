import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../text'

const DropDownItem = ({tailwind,onClick,close,children,className,id}) => {


    return (    
        <div
        data-testid={id}
        onClick={(e)=>{
            e.stopPropagation()
            close();
            if(typeof onClick !== 'undefined'){
                onClick();
            }
        }}>   
            <Text
            tailwind={`cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900
             focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${tailwind} ${className}`}>
                {children}</Text>
                </div> 
    );
};

DropDownItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DropDownItem;