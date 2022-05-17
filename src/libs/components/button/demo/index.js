import React from 'react';
import Button from '..';
import { ReactComponent as ArrowSVG } from './arrow-back.svg'
import { ReactComponent as ArrowRightSVG } from './arrow-right.svg'

const Demo = () => {
    const wrapper = `m-2 md:m-5 md:w-fill flex flex-col  items-center md:flex-row md:items-center 
     md:justify-evenly `
    const button = 'my-2 w-auto md:my-0'

    return (
        <div className='bg-gray-100 grid grid-cols-2 min-h-screen md:flex md:justify-center md:flex-col'>
            <div className={wrapper}>
            <Button tailwind={button} size='extra-small' variant='primary'>Button 1</Button>
                <Button tailwind={button} size='small' variant='primary'>Button 1</Button>
                <Button  tailwind={button} size='default' variant='primary'>Button 1</Button>
                <Button  tailwind={button}  size='large' variant='primary'>Button 1</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' variant='secondary'>Button 2</Button>

                <Button  tailwind={button}  size='small' variant='secondary'>Button 2</Button>
                <Button  tailwind={button}  size='default' variant='secondary'>Button 2</Button>
                <Button   tailwind={button} size='large' variant='secondary'>Button 2</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' variant='outline'>Button 3</Button>

                <Button  tailwind={button}  size='small' variant='outline'>Button 3</Button>
                <Button  tailwind={button}  size='default' variant='outline'>Button 3</Button>
                <Button  tailwind={button}  size='large' variant='outline'>Button 3</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' variant='dark'>Button 4</Button>

                <Button  tailwind={button}  size='small' variant='dark'>Button 4</Button>
                <Button  tailwind={button}  size='default' variant='dark'>Button 4</Button>
                <Button  tailwind={button}  size='large' variant='dark'>Button 4</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' variant='text'>Button 5</Button>

                <Button  tailwind={button}  size='small' variant='text'>Button 5</Button>
                <Button  tailwind={button}  size='default' variant='text'>Button 5</Button>
                <Button  tailwind={button}  size='large' variant='text'>Button 5</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' iconLeft={<ArrowSVG />}>Button 6</Button>

                <Button  tailwind={button}  size='small' iconLeft={<ArrowSVG />}>Button 6</Button>
                <Button  tailwind={button}  size='default' iconLeft={<ArrowSVG />}>Button 6</Button>
                <Button  tailwind={button}  size='large' iconLeft={<ArrowSVG />}>Button 6</Button>
            </div>
            <div className={wrapper}>
            <Button  tailwind={button}  size='extra-small' iconRight={<ArrowRightSVG />}>Button 7</Button>

                <Button  tailwind={button}  size='small' iconRight={<ArrowRightSVG />}>Button 7</Button>
                <Button  tailwind={button}  size='default' iconRight={<ArrowRightSVG />}>Button 7</Button>
                <Button  tailwind={button}  size='large' iconRight={<ArrowRightSVG />}>Button 7</Button>
            </div>



        </div>
    );
};

export default Demo;