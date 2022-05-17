import React from 'react';
import PropTypes from 'prop-types';
import Card from 'libs/components/card'
import Form from 'libs/components/form'
import Text from 'libs/components/text'
import Button from 'libs/components/button'

const FormLayout = ({ borderBottom, submitText, onSubmit, children, heading, subHeading,
    submitId, loading, split, headingWithin }) => {

    return (
        <div>
            <div className={`w-full grid grid-cols-1 ${split && 'lg:gap-8 lg:grid-cols-5'} justify-evenly`}>

                {!headingWithin &&
                    <div className='lg:col-span-2'>
                        <Text
                            color
                            tailwind='font-bold text-gray-800'>{heading}</Text>
                        <Text
                            type='small'>{subHeading}</Text>
                    </div>
                }


                <Card
                    header={headingWithin && { heading: heading, subHeading: subHeading }}
                    className='border border-gray mt-4 lg:mt-0 lg:w-full lg:col-span-3'>
                    <Form onSubmit={onSubmit}>
                        <div className={`lg:w-full  px-8`}>

                            {children}
                        </div>
                        <div className='w-full bg-gray-100 flex justify-end mt-8 px-8 py-4 rounded-b-lg'>
                            <Button
                                loading={loading}
                                id={submitId}
                                typeSubmit
                                size='small'>{submitText}</Button>
                        </div>
                    </Form>

                </Card>
            </div>

            {borderBottom &&
                <div className={` w-full h-px bg-gray-300 my-8`} />
            }

        </div>
    );
};

FormLayout.defaultProps = {
    borderBottom: true,
    submitText: 'Save',
    loading: false,
    /** determines whether to make into 2 column grid on large screen */
    split: true,
    /** whether the heading should be inside the card */
    headingWithin: false,

};

FormLayout.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    onSubmit: PropTypes.func,
    submitId: PropTypes.string,

};

export default FormLayout;