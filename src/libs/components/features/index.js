import React from 'react';
import Container from '../container'
import PropTypes from 'prop-types'
import Item from './components/item'
import Icon from 'libs/components/icon';

const Features = ({ title, content, items }) => {



    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    {/**<p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p> */}
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        {title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                        {content}
                    </p>
                </div>

                <div className="mt-10">
                    <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {
                            items.map(({ title, content, icon }, index) => (
                                <li className="my-6 md:my-0">
                                    <div className=" flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <Icon
                                                    bg
                                                    color
                                                    size
                                                    hasBackground={false}
                                                    src={icon}
                                                    tailwind={` text-white p-3 h-12 w-12`}
                                                    round={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                                {content}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};



Features.propTypes = {

    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,

    })).isRequired
}
export default Features;
