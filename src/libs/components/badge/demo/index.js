import React from 'react';
import Badge from '..';
import { ReactComponent as ArrowUpSVG } from './arrowup.svg'

const Demo = () => {
    const row = `w-full   justify-evenly flex`
    return (
        <div className='bg-gray-100 flex flex-col min-h-screen items-center justify-evenly'>
            <div className={`${row}`}>
                <Badge
                    variant='blue'
                    hasBackground={true} >badge</Badge>

                <Badge
                    variant='red'
                    hasBackground={true} >badge</Badge>

                <Badge
                    variant='yellow'
                    hasBackground={true} >badge</Badge>

                <Badge
                    variant='green'
                    hasBackground={true} >badge</Badge>
            </div>
            <div className={`${row}`}>
                <Badge
                    variant='blue'
                    hasBackground={false} >badge</Badge>

                <Badge
                    variant='red'
                    hasBackground={false} >badge</Badge>


                <Badge
                    variant='yellow'
                    hasBackground={false}
                >badge</Badge>
                <Badge
                    variant='green'
                    hasBackground={false}>badge</Badge>
            </div>

            <div className={`${row}`}>
                <Badge
                    leadingIcon={<ArrowUpSVG />}
                    variant='blue'
                    hasBackground={true} >badge</Badge>

                <Badge
                    leadingIcon={<ArrowUpSVG />}

                    variant='red'
                    hasBackground={true} >badge</Badge>


                <Badge
                    leadingIcon={<ArrowUpSVG />}

                    variant='yellow'
                    hasBackground={true}
                >badge</Badge>

                <Badge
                    leadingIcon={<ArrowUpSVG />}

                    variant='green'
                    hasBackground={true}>badge</Badge>
            </div>

            <div className={`${row}`}>
                <Badge
                    trailingIcon={<ArrowUpSVG />}
                    variant='blue'
                    hasBackground={true} >badge</Badge>

                <Badge
                    trailingIcon={<ArrowUpSVG />}

                    variant='red'
                    hasBackground={true} >badge</Badge>


                <Badge
                    trailingIcon={<ArrowUpSVG />}

                    variant='yellow'
                    hasBackground={true}
                >badge</Badge>

                <Badge
                    trailingIcon={<ArrowUpSVG />}

                    variant='green'
                    hasBackground={true}>badge</Badge>
            </div>
        </div >

    );
};

export default Demo;