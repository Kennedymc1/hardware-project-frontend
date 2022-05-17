import React, { useState } from 'react';
import IconButton from 'libs/components/iconbutton';
import Dialog from 'libs/components/dialog';
import { ReactComponent as MenuSVG } from '../../images/menu.svg'
import { ReactComponent as CancelSVG } from '../../images/cancel.svg'
import Tab from 'libs/components/tab';
import Button from 'libs/components/button';
import Icon from 'libs/components/icon';

const MobileAppBar = ({ onLoginClick, onTabClick, headerItems, logo, tailwind,
    loginText, loginBtnTailwind }) => {

    const [showDialog, setShowDialog] = useState(false)

    const menuIconButton = (src, onClick) => <IconButton
        tailwind={`hover:text-gray-700 text-gray-600  hover:bg-gray-100`}
        color
        hover
        round={false}
        hasBackground={false}
        onClick={onClick}
        src={src} />
    return (
        <div className={`w-full ${tailwind}`}>
            <div className='w-full flex justify-between items-center'>
                {logo}
                {menuIconButton(<MenuSVG />, () => setShowDialog(true))}
            </div>

            <Dialog
                onCloseComplete={() => setShowDialog(false)}
                isShown={showDialog}
                variant='absolute-basic'>
                <div className='flex justify-between p-4'>

                    {logo}
                    {menuIconButton(<CancelSVG />, () => setShowDialog(false))}
                </div>
                {
                    headerItems.map((value, index) => (
                        <Tab
                            bg
                            hover
                            color
                            key={index}
                            tailwind={`my-1 bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-800`}
                            textAlign='left'
                            isSelected={false}
                            onClick={() => onTabClick(index)}
                        >{value}</Tab>
                    ))
                }

                <Button
                    variant='text'
                    size='large'
                    textSize
                    color
                    onClick={onLoginClick}
                    tailwind={`rounded-t-none text-base py-2 ${loginBtnTailwind}
                    w-full bg-gray-100 hover:bg-gray-200`}>
                    {loginText} </Button>
            </Dialog>
        </div>
    );
};


export default MobileAppBar;