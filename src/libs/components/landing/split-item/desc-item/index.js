import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'

const SplitDescItem = ({title,content,tailwind,className}) => {
    return (
        <div className={`${tailwind} ${className}`}>
                <Text
                    color
                    textSize
                    tailwind='font-medium text-gray-900 text-lg' >{title}</Text>

                <Text
                    textSize
                    tailwind={`text-sm md:text-base`}>{content}</Text>
           
        </div>
    );
};

SplitDescItem.propTypes = {
    
};

export default SplitDescItem;