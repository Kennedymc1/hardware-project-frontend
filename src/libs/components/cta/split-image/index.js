import React from 'react';
import Container from '../../container';
import Text from '../../text';
import Button from '../../button';
import { ReactComponent as LinkSVG } from '../images/link.svg'

const SplitImage = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:flex-1'>
                <div className='relative'>
                <div className='opacity-75 bg-indigo-800 absolute h-full w-full '/>
                    <img
                        className='object-cover h-64 w-full md:h-full'
                        src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                    />
                </div>
            </div>

            <Container tailwind='pt-12 md:pt-0 bg-gray-800 md:flex-1'>
                <Text
                    color
                    tailwind='uppercase text-gray-300 tracking-tight font-medium pt-8'
                >Award wining support</Text>
                <Text
                    color
                    tailwind='text-gray-100'
                    type='heading-medium'>We're here to help</Text>
                <Text
                    color
                    tailwind='mt-6 text-gray-300'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat</Text>

                <Button
                    tailwind='mt-8'
                    variant='outline'
                    iconRight={<LinkSVG />}
                >Visit the help center</Button>
            </Container>
        </div>
    );
};

export default SplitImage;