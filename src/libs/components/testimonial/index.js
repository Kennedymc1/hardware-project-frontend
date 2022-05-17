import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import 'components/fonts/index.css'

const patternColor = '#E2E8F0'

const Testimonial = ({ content, author, company }) => {
    return (

        <div>

            <div className='hidden md:flex'>
                <svg className="absolute transform -mt-16" width="200" height="320" fill="none" viewBox="0 0 200 200">
                    <defs>
                        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="3" height="3" className="text-gray-200" fill={patternColor}></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"></rect>
                </svg>
            </div>

            <div className='md:mx-16 lg:mx-48 relative'>

            
                <Text
                    className='logo-text'
                    color
                    type='text-large'
                    tailwind='text-center text-gray-800 font-bold'><span className='logo-text'>"{content}"</span></Text>

                <Text
                    color
                    type='text'
                    tailwind='text-center text-indigo-400 font-medium mt-6'>{author} - {company}</Text>

            </div>
        </div>
    );
};

Testimonial.propTypes = {
    content: PropTypes.string,
    author: PropTypes.string,
    company: PropTypes.string,
};

export default Testimonial;