import React from 'react';
import PropTypes from 'prop-types';

const AppBar = ({variant,tailwind,className,children,bg}) => {
    let variantStyle;

    const variantLight =`${!bg && 'bg-white'} border-b border-gray-300`
    const variantDark = `${!bg && 'bg-gray-800'} `

    switch(variant){
        case 'light':
            variantStyle = variantLight;
            break
            default:
                variantStyle = variantDark;
                break
    }

return (
        <div className={`flex items-center h-16 w-full ${variantStyle} ${tailwind} ${className}`}
        >
            {children}
        </div>
    );
};

const tailwindProps = {
    bg: false,
}

AppBar.defaultProps ={
    ...tailwindProps,
variant: 'dark',
}

AppBar.propTypes = {
    variant: PropTypes.oneOf(['dark','light']),
};

export default AppBar;