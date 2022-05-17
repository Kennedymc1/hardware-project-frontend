import React, { useState } from 'react';
import AppBar from '../appbar';
import Tab from '../tab';
import Text from '../text';
import Button from '../button';
import MobileAppBar from './components/mobile-app-bar'
import NewsLetter from 'libs/components/news-letter';
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
    background-color: ${({ theme }) => theme.gray50};
    padding-bottom: ${({ bgGrayShort }) => bgGrayShort ? '0rem' : '14rem'};
`


const Landing = ({ headerItems, onLoginClicked, onHeaderItemClicked, logo, loginText, tailwind,
    className, showLogin, onGetStartedClicked, onLiveDemoClicked, heading, subHeading, getStartedText,
    liveDemoText, color, loginBtnTailwind, bgGrayShort }) => {

    const patternColor = '#E2E8F0'

    return (
        <Container bgGrayShort={bgGrayShort}>

            <div className='z-0 hidden md:flex'>
                <svg className="absolute top-0 transform translate-y-1/2 mt-8" width="200" height="320" fill="none" viewBox="0 0 200 320">
                    <defs>
                        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="3" height="3" className="text-gray-200" fill={patternColor}></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"></rect>
                </svg>
                <svg className="absolute top-0 transform right-0 " width="200" height="340" fill="none" viewBox="0 0 200 320">
                    <defs>
                        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="3" height="3" className="text-gray-200" fill={patternColor}></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"></rect>
                </svg>
            </div>


            <div className={`relative w-full px-4 ${tailwind} ${{ className }}`}>

                <AppBar
                    bg
                    tailwind='border-none px-0 md:p-12 '
                    variant='light' >
                    <MobileAppBar
                        logo={logo}
                        loginText={loginText}
                        tailwind='md:hidden'
                        headerItems={headerItems}
                        loginBtnTailwind={loginBtnTailwind}
                        onLoginClick={() => onLoginClicked()}
                        onTabClick={onHeaderItemClicked}
                    />


                    <div className='hidden md:flex justify-evenly items-center w-full'>

                        <div className='w-full relative flex'>
                            <div className='flex justify-start w-full'>

                                {logo}

                            </div>
                            <div className='flex'>
                                {
                                    headerItems.map((value, index) => (
                                        <Tab
                                            bg
                                            hover
                                            color
                                            key={index}
                                            tailwind={`my-1 bg-transparent text-gray-600 hover:text-gray-700`}
                                            textAlign='center'
                                            isSelected={false}
                                            onClick={() => onHeaderItemClicked(index)}
                                        >{value}</Tab>
                                    ))
                                }
                            </div>


                            <div className='flex justify-end items-center w-full'>
                                {showLogin &&
                                    <Button
                                        color
                                        hover
                                        onClick={() => onLoginClicked()}
                                        size='small'
                                        tailwind={`my-2 ${loginBtnTailwind}`}
                                        variant='outline'>{loginText}</Button>
                                }
                            </div>

                        </div>
                    </div>


                </AppBar>


                <div className='flex flex-col mt-16  z-10 relative'>
                    <Text
                        type='heading-large'
                        textSize
                        leading
                        tailwind='text-center text-4xl sm:text-5xl lg:text-6xl leading-10'>
                        {heading.blackText}</Text>
                    <Text
                        type='heading-large'
                        color
                        textSize
                        tailwind={`sm:mt-4 md:mt-6 text-center ${color}  text-4xl sm:text-5xl lg:text-6xl 
                         leading-10`} >{heading.colorText}</Text>
                    <Text
                        color
                        weight
                        textSize
                        type='text'
                        tailwind={`text-center md:mt-10 mt-4 md:mx-32 text-gray-600 leading-tight 
                        md:text-2xl`}>{subHeading}</Text>

                </div>

                <div className='px-4 flex flex-col md:flex-row justify-center md:py-10 w-full md:w-auto'>
                    <Button
                        onClick={onGetStartedClicked}

                        tailwind='mb-2 md:mb-0 mt-8 md:mt-0 md:mx-2'
                    >{getStartedText}</Button>

                    <Button
                        color
                        onClick={onLiveDemoClicked}
                        hover
                        tailwind='my-2 md:my-0 md:mx-2 text-indigo-700 hover:text-indigo-600'
                        variant='outline'>{liveDemoText}</Button>
                </div>
            </div>
        </Container>
    );
};

Landing.defaultProps = {
    showLogin: true,
    loginText: 'Login',
    getStartedText: 'Get Started',
    liveDemoText: 'Live demo',
    //determines whether the bg gray color should be short or extended longer to the bottom
    bgGrayShort: true
}
Landing.propTypes = {
    onHeaderItemClicked: PropTypes.func.isRequired,
    onLoginClicked: PropTypes.func.isRequired,
    onGetStartedClicked: PropTypes.func.isRequired,
    onLiveDemoClicked: PropTypes.func.isRequired,
    heading: PropTypes.shape({
        blackText: PropTypes.string.isRequired,
        colorText: PropTypes.string.isRequired,
    }).isRequired,
    color: PropTypes.string,
    loginBtnTailwind: PropTypes.string,
    subHeading: PropTypes.string,
    logo: PropTypes.object.isRequired,
    headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Landing;