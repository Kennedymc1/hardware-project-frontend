import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../button';
import Dialog from '..';


const Demo = () => {
    const [showSimple, setShowSimple] = useState(false)
    const [showSimpleGray, setShowSimpleGray] = useState(false)
    const [showAction, setShowAction] = useState(false)
    const [showDoubleAction, setShowDoubleAction] = useState(false)
    const [showAbsolute, setShowAbsolute] = useState(false)

    return (
        <div className={`bg-gray-100 min-h-screen flex flex-col md:flex-row justify-evenly items-center`}>
            <Button onClick={() => setShowSimple(true)} size='small'>Simple</Button>
            <Button onClick={() => setShowSimpleGray(true)} size='small'>Simple Gray</Button>
            <Button onClick={() => setShowAction(true)} size='small'>Action</Button>
            <Button onClick={() => setShowDoubleAction(true)} size='small'>Double Action</Button>
            <Button onClick={() => setShowAbsolute(!showAbsolute)} size='small'>Absolute</Button>

            <Dialog
                isShown={showAbsolute}
                variant='absolute'
                onCloseComplete={() => setShowAbsolute(false)}
            > 
            <div className = 'h-32 flex justify-center items-center'>
                This is the absolute dialog 
                </div>
                </Dialog>

            <Dialog
                isShown={showSimple}
                variant='simple'
                confirmText="Deactivate"
                onCloseComplete={() => setShowSimple(false)}
                title='Deactivate Account'
                text='Are you sure you want to deactivate your account? All of your data will be permanantly removed. This action cannot be undone.'
            />

            <Dialog
                isShown={showSimpleGray}
                variant='simple-gray'
                confirmText="Deactivate"
                onCloseComplete={() => setShowSimpleGray(false)}
                title='Deactivate Account'
                text='Are you sure you want to deactivate your account? All of your data will be permanantly removed. This action cannot be undone.'
            />

            <Dialog
                isShown={showAction}
                variant='action'
                onCloseComplete={() => setShowAction(false)}
                title='Purchase Successful'
                text='Confirm to recieve purchase ,All of your data will be reserved. This action cannot be undone.'
            />

            <Dialog
                isShown={showDoubleAction}
                variant='double-action'
                onCloseComplete={() => setShowDoubleAction(false)}
                title='Purchase Successful'
                text='Confirm to recieve purchase ,All of your data will be reserved. This action cannot be undone.'
            />
        </div>
    );
};

export default Demo;