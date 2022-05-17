import React, { useState } from 'react';
import PropTypes from 'prop-types'
import IconButton from 'libs/components/iconbutton';
import { ReactComponent as MenuSVG } from './images/menu.svg'
import { ReactComponent as CancelSVG } from './images/cancel.svg'
import Tab from 'libs/components/tab';
import Button from 'libs/components/button';
import Dialog from 'libs/components/dialog';

const HeaderNav = ({ headerItems, onLoginClicked, onHeaderItemClicked, logo, loginText}) => {

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

        <div className="relative bg-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    {logo}

                                    <div className='md:hidden'>
                                        {menuIconButton(<MenuSVG />, () => setShowDialog(true))}
                                    </div>

                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4">
                                {
                                    headerItems.map((value, index) => (
                                        <button
                                            key={index}
                                            onClick={() => onHeaderItemClicked(index)}
                                            className={`${index > 0 && 'ml-8'} focus:outline-none font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out`}>{value}
                                        </button>

                                    ))
                                }
                                <button
                                    onClick={onLoginClicked}
                                    className="ml-8 focus:outline-none font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Log in</button>
                            </div>
                        </nav>
                    </div>

                    {/**mobile view */}
                    <div className={`${showDialog ? 'duration-150 ease-out opacity-100 scale-100 ' : ' duration-100 ease-in opacity-0 scale-95'} absolute inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
                        <div className="rounded-lg shadow-md">
                            <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">

                                <Dialog
                                tailwind='-mt-16'
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
                                                onClick={() => onHeaderItemClicked(index)}
                                            >{value}</Tab>
                                        ))
                                    }

                                    <Button
                                        variant='text'
                                        size='large'
                                        textSize
                                        color
                                        onClick={onLoginClicked}
                                        tailwind={`rounded-t-none text-base py-2 
                    w-full bg-gray-100 hover:bg-gray-200`}>
                                        {loginText} </Button>
                                </Dialog>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

HeaderNav.defaultProps = {
    showLogin: true,
    loginText: 'Login',
}
HeaderNav.propTypes = {
    onHeaderItemClicked: PropTypes.func.isRequired,
    onLoginClicked: PropTypes.func.isRequired,
    logo: PropTypes.object.isRequired,
    headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default HeaderNav;
