import React from 'react';
import Simple from '../simple'
import Dark from '../dark'

const Demo = () => {
    return (
        <div
         className=' min-h-screen flex flex-col justify-evenly'>
            <Simple />
            <Dark />
        </div>
    );
};

export default Demo;