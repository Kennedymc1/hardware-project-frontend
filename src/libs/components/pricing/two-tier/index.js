import React from 'react';
import PropTypes from 'prop-types';

const TwoTier = ({ items, title, trialDays, onSelect,
    pricingText, content, getStartedFree, creditCardRequired }) => {
    return (

        <div className="">
            <div className={`absolute w-full h-full`}>

                <div className={`bg-gray-900  w-full h-1/2 `} />

            </div>

            <div className='relative z-10'>
                <div className="pt-12 sm:pt-16 lg:pt-24">
                    <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                                Pricing
        </h2>
                            <p className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                                {title}
                            </p>
                            {/* <p className="text-xl leading-7 text-gray-300">
                                Sign up for {trialDays}-day unlimited trial.{!creditCardRequired ? ' No credit card required' : ''}
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                    <div className="relative">
                        <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
                        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">

                                {
                                    items.map((value, index) => {
                                        return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                                            <div className="px-6 py-8  sm:p-10 sm:pb-6">
                                                <div>
                                                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                                                        {value.title}
                                                    </h3>
                                                </div>
                                                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                                                    ${value.monthlyPrice}
                                                    <span class="ml-1 text-2xl leading-8 font-medium text-gray-500">
                                                        {value.pricingText ? value.pricingText : pricingText}

                                                    </span>
                                                </div>
                                                {/**
                                            <p class="mt-5 text-lg leading-7 text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          </p>
                                          */}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                                <ul className="space-y-4">
                                                    {
                                                        value.features.map(({ content }) => {
                                                            return <li className="flex items-start">
                                                                <div className="flex-shrink-0">

                                                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                </div>
                                                                <p className="ml-3 text-base leading-6 text-gray-700">
                                                                    {content}
                                                                </p>
                                                            </li>
                                                        })
                                                    }


                                                </ul>


                                                <div className="rounded-md shadow">
                                                    <button
                                                        onClick={() => onSelect(value.duration)}
                                                        className="flex w-full items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" aria-describedby="tier-standard">
                                                      Start {value.duration} Plan
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TwoTier.defaultProps = {
    trialDays: 14,
    submitText: 'Get started',
    getStartedFree: false,
    pricingText: '/mo',

}

TwoTier.propTypes = {
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

export default TwoTier;
