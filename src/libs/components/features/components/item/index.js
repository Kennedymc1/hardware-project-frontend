import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text';
import Icon from 'libs/components/icon';

const Item = ({ title, content, icon, variant }) => {
    const isFlexCol = (variant === 'col')

    return (
        <div className={`flex pt-10 md:pt-16 ${isFlexCol ? 'flex-col' : 'flex-row'}`}>
            <Icon
                bg
                color
                size
                src={icon}
                tailwind={` bg-indigo-500 text-white
                 ${isFlexCol ? 'p-4 h-16 w-16 mb-4' : ' p-3 h-12 w-12'}`}
                round={false}
            />

            <div className={`${!isFlexCol && 'mx-6'}`}>

                <Text
                    color
                    textSize
                    tailwind='font-medium text-gray-900 text-lg' >{title}</Text>

                <Text
                    textSize
                    tailwind={`${isFlexCol ? ' text-base ' : 'text-sm md:text-base'}`}>{content}</Text>
            </div>

        </div>
    );
};

export const propTypes = {
    variant: PropTypes.oneOf(['row', 'col'])
};



export default Item;