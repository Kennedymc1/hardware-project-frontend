import React from 'react';
import PropTypes from 'prop-types';
import Card from 'libs/components/card'
import Text from 'libs/components/text'
import Button from 'libs/components/button'
import Badge from 'libs/components/badge'
import { ReactComponent as CheckedSVG } from 'components/pricing/images/checked.svg'
import Icon from 'libs/components/icon'

//todo if the items are only 1 then center the price,if they more than one then
//dont center the price ... check the size of items from the parent pricing component
const Item = ({ variant, isMonthly, title, monthlyPrice, yearlyPrice, features, onClick,
    submitText, pricingText, centerPrice, grid }) => {

    const isNormalVariant = variant === 'normal'


    return (
        <div className={`${grid ? 'py-2' : 'py-12'} w-full px-8 md:px-4`}>
            <Card tailwind={`w-full flex flex-col p-6`}>
                {!isNormalVariant ?
                    <Text
                        type='heading-medium'
                    >{title}</Text>
                    :
                    <div className='flex py-2'>
                        <Badge
                            tailwind={` uppercase`}>{title}</Badge>
                    </div>
                }
                {monthlyPrice === 0 ?
                    <Text
                        textSize
                        tailwind={`text-6xl ${centerPrice && 'md:text-center w-full'} `}
                        type='heading-large'>FREE</Text>
                    :
                    <Text
                        textSize
                        tailwind={`text-6xl ${centerPrice && 'md:text-center w-full'} `}
                        type='heading-large'>${isMonthly ? monthlyPrice : yearlyPrice}<span className='font-semibold text-gray-700 text-base'>{pricingText}</span></Text>
                }
                <ul className={`pt-6`}>
                    {
                        features.map(({ title, content }) => {
                            return <div className={`flex`}>

                                <Icon

                                    color
                                    tailwind='text-green-600 pt-0'
                                    hasBackground={false}
                                    src={<CheckedSVG />}
                                />
                                <Text tailwind='text-gray-900'><span >{title}</span> {content}</Text></div>
                        })
                    }
                </ul>
                <div className='py-4'>
                    <Button
                        variant='dark'
                        tailwind={`w-full`}
                        onClick={onClick}
                    >{submitText}</Button>
                </div>
            </Card>
        </div>
    );
};

Item.defaultProps = {
    isMonthly: true,
}

Item.propTypes = {
    monthlyPrice: PropTypes.number.isRequired,
    yearlyPrice: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    submitText: PropTypes.string,
    title: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired)
};

export default Item;