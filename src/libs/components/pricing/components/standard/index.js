import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Toggle from 'libs/components/toggle'
import Item from './item';
import styled from 'styled-components'
import Container from 'libs/components/container'

const Standard = ({ items, title, trialDays, submitText, tailwind, className, onSelect,
    variant, showAnnual, altTitle, pricingText, content, narrow, centerPrice, wrapperVariant,
    itemsCompact, grid, getStartedFree, bg, creditCardRequired }) => {

    const [isMonthly, setIsMonthly] = useState(true)

    const isNormalVariant = wrapperVariant === 'normal'

    return (
        <div
            className={`relative ${tailwind} ${className} w-full h-full`}>
            <div className={`absolute w-full h-full pb-56`}>
                {!bg &&
                    <div className={`bg-gray-800  w-full h-full `} />
                }
            </div>
            <div
                className={`relative w-full md:px-4 ${narrow && 'md:px-8 lg:px-48'}`}>
                <div className=' flex flex-col items-center z-20 w-full pt-6'>
                    {isNormalVariant &&
                        <Text
                            color
                            weight
                            tailwind='uppercase text-gray-500 font-semibold'
                            type='heading-small'
                        >Pricing</Text>
                    }
                    <Text
                        color
                        type='heading-large'
                        tailwind='text-white text-center py-1'
                    >{title}</Text>
                    {isNormalVariant &&
                        (getStartedFree ?
                            <Text
                                color
                                weight
                                type='heading-small'
                                tailwind='text-white py-4  text-center font-normal'
                            >Get started for free</Text>
                            :
                            <Text
                                color
                                weight
                                type='heading-small'
                                tailwind='text-white py-4  text-center font-normal'
                            >Sign up for {trialDays}-day unlimited trial.{!creditCardRequired ? ' No credit card required' : ''}</Text>
                        )
                    }

                    <Text
                        color
                        weight
                        type='heading-small'
                        tailwind='text-white py-4  text-center font-normal'
                    >{content}</Text>

                    {showAnnual &&
                        <div className={`flex ${isNormalVariant && 'pb-4 pt-6'}`}>
                            <Text
                                color
                                tailwind={`${bg ? 'text-gray-900' : 'text-white'}`}
                            >Monthly</Text>
                            <Toggle
                                tailwind='px-2'
                                onToggle={(value) => setIsMonthly(!value)} />
                            <Text
                                color
                                tailwind={`${bg ? 'text-gray-900' : 'text-white'}`}
                            >Annual</Text>
                        </div>
                    }

                    <div className={`${grid ? 'md:grid md:grid-cols-2 md:gap-4 md:px-12' : 'md:flex md:justify-evenly'} w-full mt-4
                    ${items.length === 1 && itemsCompact && 'sm:px-8  lg:px-24'}`}>
                        {
                            items.map((value, index) => {
                                return <Item
                                    grid={grid}
                                    wrapperVariant={wrapperVariant}
                                    centerPrice={centerPrice}
                                    pricingText={value.pricingText ? value.pricingText : pricingText}
                                    altTitle={altTitle}
                                    variant={variant}
                                    onClick={() => onSelect(index, isMonthly)}
                                    isMonthly={isMonthly}
                                    submitText={submitText}
                                    {...value}
                                />
                            })
                        }
                    </div>
                    {
                        /** todo create a have higher needs view */
                    }

                </div>
            </div>
        </div>
    );
};

Standard.defaultProps = {
    trialDays: 14,
    submitText: 'Get started',
    showAnnual: true,
    variant: 'normal',
    pricingText: '/mo',
    narrow: false,
    /**set whether to center the text of the price */
    centerPrice: false,
    wrapperVariant: 'normal',
    itemsCompact: true,
    rounded: false,
    grid: false,
    getStartedFree: false,
    bg: false
}

Standard.propTypes = {
    wrapperVariant: PropTypes.oneOf(['normal', 'alt']),
    variant: PropTypes.oneOf(['normal', 'alt']),
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        monthlyPrice: PropTypes.number.isRequired,
        yearlyPrice: PropTypes.number.isRequired,
        title: PropTypes.string,
        pricingText: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            
        }),

        ).isRequired,
    })),
    submitText: PropTypes.string,
    onSelect: PropTypes.func,
};

export default Standard;