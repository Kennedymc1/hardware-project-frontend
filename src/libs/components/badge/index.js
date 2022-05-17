import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text';
import Icon from 'libs/components/icon'

const Badge = ({ color, hasBackground, className, tailwind, children, bg, variant, leadingIcon,
    trailingIcon }) => {

    let variantStyle;

    switch (variant) {
        case 'red':
            variantStyle = `${!color && 'text-red-700'}  ${hasBackground && !bg && 'bg-red-200'}`
            break
        case 'yellow':
            variantStyle = `${!color && 'text-yellow-700'}  ${hasBackground && !bg && 'bg-yellow-200'}`
            break
        case 'green':
            variantStyle = `${!color && 'text-green-700'} ${hasBackground && !bg && 'bg-green-200 '}`
            break
        default:
            variantStyle = `${!color && 'text-indigo-700'}  ${hasBackground && !bg && 'bg-indigo-200'} `
            break
    }

    return (

        <div className={`font-semibold flex items-center rounded-full ${hasBackground && 'px-3'}
        ${hasBackground && leadingIcon && 'pl-2'}  ${hasBackground && trailingIcon && 'pr-2'} 
         ${variantStyle} ${tailwind} ${className}`}>
            {leadingIcon &&
                <Icon
                    color
                    size
                    hasBackground={false}
                    tailwind={`w-4 h-4`}
                    src={leadingIcon}
                />
            }

            <Text
                color
                type='text-small'
            >
                {children}
            </Text>

            {trailingIcon &&
                <Icon
                    color
                    size
                    hasBackground={false}
                    tailwind={`w-4 h-4`}
                    src={trailingIcon}
                />
            }
        </div>
    );
};
const tailwindProps = {
    bg: false,
    color: false,
}

Badge.defaultProps = {

    ...tailwindProps,
    variant: 'blue',
    hasBackground: true,
    bold: false, //TODO handle a bold version of badge with font-medium for the text
}

export const propTypes = {
    leadingIcon: PropTypes.object,
    trailingIcon: PropTypes.object,
    variant: PropTypes.oneOf(['blue', 'red', 'yellow', 'green'])
}

Badge.propTypes = propTypes;

export default Badge;