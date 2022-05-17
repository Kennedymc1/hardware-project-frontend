import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Wrapper from 'libs/components/wrapper'

const DescItem = ({ padding, testid, title, content, isEven, tailwind, className, children, horizontal, objectContent }) => {

    return (
        <Wrapper
            testid={testid}
            className={className}
            isGray={(() => {
                if (isEven === 'true') return true
                if (isEven === 'false') return false
                return isEven
            })()}
            tailwind={`${!padding && 'p-4'} ${tailwind}`}>
            {children ?
                children
                :
                <div className={`${horizontal ? 'grid grid-cols-5' : 'md:grid md:grid-cols-5'}`}>
                    <div className={`col-span-2 w-full`}>
                        <Text
                            type={`text-small`}
                            tailwind={`font-semibold`}>{title}</Text>
                    </div>

                    <div className={`w-full col-span-3`}>

                        {objectContent ?
                            objectContent
                            :
                            <Text
                                type={`text-small`}
                                tailwind={`text-gray-900`}>{(typeof content !== 'undefined' && content) ? content : '--'}</Text>
                        }
                    </div>
                </div>
            }
        </Wrapper>
    );
};

const tailwindProps = {
    padding: false
}
DescItem.defaultProps = {
    ...tailwindProps,
    /** if set to true the item will not become vertical on mobile screens */
    horizontal: false
}

DescItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,

};

export default DescItem;