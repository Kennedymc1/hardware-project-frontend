import FormLayout from '..'
import Container from 'libs/components/container'
import React from 'react';
import FormItem from '../form-item';
import FormGroup from '../form-group';

const Demo = () => {
    return (
        <div className='bg-gray-100'>
            <FormLayout
                heading='Profile'
                subHeading='This information will be displayed publicly so be careful what you share'
            >
                <FormItem
                    title='UserName'
                    content='text-input'

                />
                <FormItem
                    title='About'
                    content='text-area'
                    placeholder='you@example.com'
                    hint='Brief description for your profileURLs are hyperlinked'
                />
                <FormItem
                    title='Photo'
                    content='photo-change'

                />
                <FormItem
                    title='CoverPhoto'
                    content='file-upload'

                />

            </FormLayout>

            <FormLayout
                borderBottom={false}
                heading='Personal Information'
                subHeading='Use a permanent address where you can receive mail'
            >

                <FormGroup>

                    <FormItem
                        title='First Name'
                        content='text-input'

                    />
                    <FormItem
                        title='Last Name'
                        content='text-input'

                    />
                </FormGroup>
                <FormItem
                    title='Email Address'
                    content='text-input'
                />
                <FormItem
                    title='Street Address'
                    content='text-input'

                />

                <FormGroup>
                    <FormItem
                        title='City'
                        content='text-input'
                    />
                    <FormItem
                        title='State / Province'
                        content='text-input'
                    />
                    <FormItem
                        title=' Zip / Postal'
                        content='text-input'
                    />
                </FormGroup>
            </FormLayout>
        </div>
    );
};

export default Demo;