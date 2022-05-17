import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'


const Mass = ({ title, trialDays, submitText, pricingText, onSelect }) => {
    return (
        <div>
            <div className=' flex flex-col items-center z-20 w-full pt-6'>

                <Text
                    color
                    weight
                    tailwind='uppercase text-gray-500 font-semibold'
                    type='heading-small'
                >Pricing</Text>

                <Text
                    color
                    type='heading-large'
                    tailwind='text-white text-center py-1'
                >{title}</Text>


                <Text
                    color
                    weight
                    type='heading-small'
                    tailwind='text-white py-4  text-center font-normal'
                >Sign up for {trialDays}-day unlimited trial. No credit card required</Text>

            </div>

        </div>
    );
};

Mass.defaultProps = {
    trialDays: 14,
    submitText: 'Get started',
    showAnnual: true,
    pricingText: '/mo',
    title: 'Simple, traffic-based pricing'
}
Mass.propTypes = {
    submitText: PropTypes.string,
    onSelect: PropTypes.func,
};

export default Mass;