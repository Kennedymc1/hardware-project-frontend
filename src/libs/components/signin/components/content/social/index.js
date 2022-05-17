import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'libs/components/icon';
import { ReactComponent as FacebookSVG } from '../../../images/facebook.svg'
import { ReactComponent as GoogleSVG } from '../../../images/gmail.svg'
import { ReactComponent as TwitterSVG } from '../../../images/twitter.svg'

const Social = ({tailwind}) => {

    const socialIcon = (src) => {
        return <div className={`cursor-pointer py-1 border border-gray-300 
        shadow-sm w-full rounded-md mx-1 flex justify-center`}>
            <Icon
                hasBackground={false}
                src={src}
            />
        </div>
    }

    return (
        <div className={`flex justify-evenly mt-4 ${tailwind}`}>
        {socialIcon(<FacebookSVG />)}
        {socialIcon(<TwitterSVG />)}
        {socialIcon(<GoogleSVG />)}
    </div>
    );
};

Social.propTypes = {
    
};

export default Social;