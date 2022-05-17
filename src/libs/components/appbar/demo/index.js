import React from 'react';
import styled from 'styled-components';
import AppBar from '../index'


const Demo = () => {
    return (
        <div className='flex min-h-screen bg-red-100 flex-col items-center justify-evenly'>
            <AppBar variant='dark' tailwind='my-4'/>

            <AppBar variant='light'  tailwind='my-4'/>


        </div>
    );
};

export default Demo;