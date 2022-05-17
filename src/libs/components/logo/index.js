import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'libs/components/icon'
import 'libs/components/fonts/index.css'
import Text from 'libs/components/text'
import { useHistory } from 'react-router-dom'

/**
 * 
 * @param color tailwind text color 
 */
const Logo = ({ icon, text, color, alwaysShowText, showText, showIcon, tailwind, className, clickable = true, imgContainerTailwind }) => {
    const history = useHistory()
    return (
        <div
            onClick={() => {
                if (clickable) {
                    history.replace('/')
                }
            }}
            className={`flex h-16 items-center ${clickable && 'cursor-pointer'} ${tailwind} ${className}`}>
            {showIcon &&
                <div className={imgContainerTailwind ? imgContainerTailwind : 'h-16 w-16 p-2'}>
                    <img
                        className='rounded-lg'
                        src={icon} />
                </div >

            }

            {showText &&
                < Text
                    type='heading'
                    className='logo-text'
                    font
                    textSize
                    color
                    tailwind={` text-2xl pt-2  ${color} ${!alwaysShowText && 'hidden'} md:block`}
                >{text}</Text>
            }
        </div >
    );
};

Logo.defaultProps = {
    color: 'text-gray-900',
    showText: true,
    showIcon: true,
    alwaysShowText: false
}
Logo.propTypes = {
    //png
    icon: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    tailwind: PropTypes.string,

};

export default Logo;