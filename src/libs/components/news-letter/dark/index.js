import React from 'react';
import TextInput from '../../textinput'
import Button from '../../button'
import Text from '../../text'
import PropTypes from 'prop-types'

const Dark = ({ inputId, inputName }) => {


    return (
        <div className=' px-6 bg-gray-900 py-20 lg:flex md:px-20 lg:px-10 '>
            <div
                className='pr-6 lg:w-1/2'>
                <Text
                    type='heading-medium'
                    tailwind='leading-10 text-white'
                    color>
                    Sign up for our newsletter</Text>
                <Text tailwind='text-white mt-4 text-gray-500' color>
                    Want to hear from us when we add new components? Sign up for our newsletter
                  and we'll email you every time we release a new batch of components..</Text>
            </div>
            <div
                className='flex flex-col mt-6 lg:justify-center lg:items-end'>
                <div className=' lg:flex lg:justify-end '>
                    <TextInput
                        name={inputName}
                        id={inputId}
                        type='email'
                        tailwind='w-full py-2 lg:w-64 lg:py-0 lg:flex-initial'
                        placeholder='Enter your email' />
                    <Button
                        typeSubmit
                        tailwind='my-2 w-full lg:mx-2 lg:w-auto lg:flex-initial lg:my-0'>Notify me</Button>
                </div>
                <Text
                    type='text-small'
                    tailwind=' lg:mt-4 text-gray-500'
                    color>We care about the protection of your data.
                <span className='block lg:inline'>Read our <a className='hover:text-gray-400 text-white underline' href='#'>Privacy Policy.</a></span>
                </Text>
            </div>
        </div>
    );
};

Dark.propTypes = {
    inputId: PropTypes.string,
    inputName: PropTypes.string
}

export default Dark;