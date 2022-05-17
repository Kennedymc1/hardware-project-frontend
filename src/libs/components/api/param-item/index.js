import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Wrapper from 'libs/components/wrapper'

import styled from 'styled-components'


const GrayDiv = styled.div`
    background-color: ${({ theme: { gray50, white }, isEven }) => isEven ? gray50 : white};
`

/**
 * 
 * this component is added as a child to the DescriptionList component
 */
const ParamItem = ({ padding, title, content, isEven, tailwind, className, children, horizontal, required, type, childItems, isJs, values }) => {

    const renderChildItems = () => {
        let children = childItems.props.children

        if (typeof childItems.props.children.length === 'undefined') {
            children = [childItems.props.children]
        }

        return children.map((child) => {
            return React.cloneElement(child, {
                tailwind: tailwind,
                isEven: isEven,
                horizontal
            })
        })
    }

    return (
        <GrayDiv
            isEven={isEven}
            className={`${tailwind} ${className}`}>
            <Wrapper tailwind={`${!padding && 'p-4'}`}>
                {children ?
                    children
                    :
                    <Wrapper tailwind={`${horizontal ? 'grid grid-cols-5' : 'md:grid md:grid-cols-5'}`}>
                        <div className={`col-span-1 w-full`}>
                            <Text
                                type={`text-small`}
                                tailwind={`font-semibold`}>{title}</Text>

                            {typeof required !== 'undefined' &&
                                <Text
                                    color
                                    type={`text-extra-small`}
                                    tailwind={`font-semibold text-gray-500`}>{required ? 'required' : (isJs ? 'nullable' : 'optional')}</Text>
                            }
                        </div>

                        <div className={`w-full col-span-4`}>


                            {typeof type !== 'undefined' &&
                                <div className='flex'>

                                    <Text
                                        type={`text-extra-small`}
                                        tailwind={`font-semibold px-2 bg-gray-200 rounded`}>{type}</Text>

                                </div>
                            }



                            <Text
                                type={`text-small`}
                                tailwind={`text-gray-900`}>{content}</Text>

                            {values &&
                                <div className='flex flex-wrap'>
                                    {
                                        values.map((value, index) => (
                                            <Text
                                                key={index}
                                                type={`text-extra-small`}
                                                tailwind={`px-2 ${index === 0 ? 'mr-2' : 'mx-2'} my-1 bg-green-50 rounded`}>{value}</Text>
                                        ))
                                    }
                                </div>}
                            {childItems &&

                                renderChildItems()

                            }
                        </div>
                    </Wrapper>
                }
            </Wrapper>

        </GrayDiv>
    );
};

const tailwindProps = {
    padding: false
}
ParamItem.defaultProps = {
    ...tailwindProps,
    /** if set to true the item will not become vertical on mobile screens */
    horizontal: false
}

ParamItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,

};

export default ParamItem;