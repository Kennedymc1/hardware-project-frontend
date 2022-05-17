import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Icon from 'libs/components/icon'
import {ReactComponent as TickSVG} from 'libs/components/notification/images/tick.svg'

const Condensed = ({ title, content,icon}) => {
    return (
        <div className='w-full flex'>
            <Icon
                hasBackground={false}
                color
                size
                tailwind=' text-green-600 mt-4 h-6 w-6 mx-2'
                src={icon ? icon : <TickSVG />} />

            <div className='my-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>
            </div>
        </div>
    );
};

Condensed.propTypes = {
    
};

export default Condensed;