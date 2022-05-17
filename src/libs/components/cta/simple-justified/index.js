import React from 'react';
import Text from '../../text';
import Container from '../../container';
import Button from '../../button';

const SimpleJustified = () => {
    return (
        <Container>
            <Text type='heading-medium'>Ready to dive in?</Text>
            <Text
                color
                tailwind='text-indigo-600 -mt-4'
                type='heading-medium'>Start you free triel today</Text>

            <div className='flex my-8'>
                <Button
                tailwind='m-2'>Get started</Button>
                <Button
                color
                tailwind='text-indigo-600 m-2'
                variant='outline'>Learn more</Button>
            </div>
        </Container>
    );
};

export default SimpleJustified;