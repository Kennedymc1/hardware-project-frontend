import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Icon from 'libs/components/icon'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const SortText = ({ id, sort, isAscending, mobile, onClick, children, tailwind, className, textTailwind, alt }) => {
    return (

        <div
            onClick={() => onClick(id)}
            className={`flex cursor-pointer items-center ${alt && 'flex-row-reverse'} ${tailwind} ${className}`}>

            <Text
                textSize
                color
                tailwind={`font-medium text-gray-800 ${alt && 'text-right'} ${mobile ? 'text-xs sm:text-sm lg:text-base' : 'text-base'} ` + textTailwind}>{children}</Text>

            {sort(id) &&


                <div className={mobile? 'w-4 h-4 mx-1 lg:w-6 lg:h-6 lg:mx-2' :`w-6 h-6 mx-2`}>
                    {isAscending === true ?
                        <Icon
                            color
                            size={mobile? 'w-4 h-4 lg:w-6 lg:h-6': 'w-6 h-6'}
                            hasBackground={false}
                            tailwind='text-gray-800'
                            src={<ChevronUpIcon />}
                        />

                        :

                        <Icon
                            color
                            size={mobile? 'w-4 h-4 lg:w-6 lg:h-6': 'w-6 h-6'}
                            hasBackground={false}
                            tailwind='text-gray-800'
                            src={<ChevronDownIcon />}
                        />
                    }

                </div>
            }

        </div>
    );
};

SortText.propTypes = {

};

export default SortText;