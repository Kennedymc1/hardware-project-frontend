import React, { useState } from 'react';
import PropTypes from 'prop-types'
import IconButton from 'libs/components/iconbutton';
import { ReactComponent as MenuSVG } from '../images/menu.svg'
import { ReactComponent as CancelSVG } from '../images/cancel.svg'
import Tab from 'libs/components/tab';
import Button from 'libs/components/button';
import Dialog from 'libs/components/dialog';

/**
 * TODO RIGHT NOW IT ONLY ALLOWS FOR THE VIDEO, ALLOW FOR THE IMAGE RIGHT AS WELL
 */
const ImageRight = ({ headerItems, onLoginClicked, onHeaderItemClicked, logo,
    loginText, subHeading, heading, notification, sideContent
}) => {

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

        <div className="bg-white relative">
            <div className="relative overflow-hidden">
                <header className="relative">
                    <div className="bg-gray-900 pt-6">
                        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                            <div className="flex  items-center flex-1">
                                <div className="flex  items-center justify-between w-full md:w-auto">

                                    {logo}

                                    <div className="-mr-2 flex items-center md:hidden">
                                        <button 
                                        onClick={() => setShowDialog(true)}
                                        type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                                            <span className="sr-only">Open main menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                                <div className=" w-full items-center hidden md:flex md:ml-10 md:pr-4 justify-between">
                                    <div className=''>
                                        {
                                            headerItems.map((value, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => onHeaderItemClicked(index)}
                                                    className={`${index > 0 && 'ml-8'} focus:outline-none font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out`}>{value}
                                                </button>

                                            ))
                                        }

                                    </div>

                                    <div className="hidden md:flex md:items-center md:space-x-6">
                                        <button
                                            onClick={onLoginClicked}
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                                            Log in
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </header>

            </div>

            {/**mobile view */}
            <div className={`${showDialog ? 'duration-150 ease-out opacity-100 scale-100 ' : ' duration-100 ease-in opacity-0 scale-95'} absolute z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
                <div className="rounded-lg shadow-md">
                    <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">

                        <Dialog
                            isShown={showDialog}
                            tailwind=' -mt-16 '
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

<div className='p-4 w-full'>
                            <Button
                                variant='text'
                                textSize
                                color
                                onClick={onLoginClicked}
                                tailwind={`block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700`}>
                                {loginText} </Button>
                                </div>
                        </Dialog>
                    </div>
                </div>
            </div>


            <main>
                <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24  z-10 relative">
                                    <a
                                        onClick={notification.onClick}
                                        className=" inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">{notification.text}</span>
                                        <span className="ml-4 text-sm">{notification.subText}</span>
                                        <svg className="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">{heading.blackText}</span>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">{heading.colorText}</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        {subHeading}
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                    </div>
                                </div>
                            </div>

                            {sideContent ?
                                sideContent
                                :
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">


                                        <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt="" />

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

ImageRight.defaultProps = {
    showLogin: true,
    loginText: 'Login',
    getStartedText: 'Get Started',
    liveDemoText: 'Live demo',

}
ImageRight.propTypes = {
    onHeaderItemClicked: PropTypes.func.isRequired,
    onLoginClicked: PropTypes.func.isRequired,
    onGetStartedClicked: PropTypes.func.isRequired,
    onLiveDemoClicked: PropTypes.func.isRequired,
    heading: PropTypes.shape({
        blackText: PropTypes.string.isRequired,
        colorText: PropTypes.string.isRequired,
        blackText1: PropTypes.string.isRequired,
    }).isRequired,
    subHeading: PropTypes.string,
    notification: PropTypes.shape({
        text: PropTypes.string.isRequired,
        subText: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }).isRequired,
    logo: PropTypes.object.isRequired,
    headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    sideContent: PropTypes.object
}

export default ImageRight;
