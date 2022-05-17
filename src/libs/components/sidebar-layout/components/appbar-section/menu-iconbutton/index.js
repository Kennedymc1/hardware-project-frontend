import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'libs/components/iconbutton'

const MenuIconButton = props => {
    return (
        <IconButton
            tailwind={`hover:text-gray-700 text-gray-600 hover:bg-gray-100
            ${props.tailwind}`}
            color
            hover
            round={false}
            hasBackground={false}
            onClick={props.onClick}
            src={props.src} />
    );
};

MenuIconButton.propTypes = {
    tailwind: PropTypes.string,
    src: PropTypes.object,
    onClick: PropTypes.func,

};

export default MenuIconButton;