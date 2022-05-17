import React from 'react';
import TextInput from '../../textinput'
import Button from '../../button'
import Text from '../../text'
import PropTypes from 'prop-types'

const Simple = ({ title, inputId, inputName }) => {


    return (
        <div className=' px-6 py-6'>
            <Text type='heading-medium' className='leading-10'> {title.textBlack}
                <span className='text-indigo-700 md:block'>{title.textColor}</span> </Text>
            <div className='md:flex mt-6'>
                <TextInput
                    name={inputName}
                    id={inputId}
                    type='email'
                    className='mt-6 w-full py-2 md:w-64 md:my-2'
                    placeholder='Enter your email'></TextInput>
                <Button
                    typeSubmit
                    className='my-2 w-full md:mx-2 md:w-auto'>Notify me</Button>
            </div>
        </div>
    );
};

Simple.propTypes = {
    inputId: PropTypes.string,
    inputName: PropTypes.string
}

export default Simple;