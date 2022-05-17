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
const ImageRight = ({ headerItems, onLoginClicked, onHeaderItemClicked, logo, loginText,
    onGetStartedClicked, onLiveDemoClicked, heading, subHeading, getStartedText, imageSrc, videoSrc,
    liveDemoText }) => {

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

        <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28">
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
                                    isShown={showDialog}
                                    tailwind=' -mt-16'
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

                    <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                {heading.blackText}
                                <br className="xl:hidden" />
                                <span className="text-indigo-600"> {heading.colorText}</span>
                                <span className="text-gray-900"> {heading.blackText1}</span>
                            </h2>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {subHeading}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button
                                        onClick={onGetStartedClicked}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        {getStartedText}
                                    </button>
                                </div>
                                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        onClick={onLiveDemoClicked}
                                        className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        {liveDemoText}
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div
                  className="mt-12 h-full px-3 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <svg
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                      width="640" height="784" fill="none" viewBox="0 0 640 784">
                        <defs>
                            <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"/>
                        <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"/>
                    </svg>
                    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                        <button type="button"
                          className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                            <iframe width="100%" height="298.66"
                                    src={videoSrc}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </button>
                    </div>
                </div>
            </div>
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
        blackText1:PropTypes.string.isRequired,
    }).isRequired,
    subHeading: PropTypes.string,
    logo: PropTypes.object.isRequired,
    headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageRight;
