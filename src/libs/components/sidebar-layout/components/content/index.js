import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import styled from 'styled-components'


const GrayDiv = styled.div`
    background-color: ${({ theme }) => theme.gray50};
`

const ContentWrapper = styled.div`
    
`

const Content = ({ children, title, withHeadingView, contentPaddingLeft }) => {
    return (
        <div className='pt-16 h-screen w-full '>
            <GrayDiv className={`h-full md:pl-${contentPaddingLeft} md:pr-6 p-2 overflow-y-auto  overflow-x-auto`}>
                
                <div className='px-2 h-full box-border flex flex-col '>
                    <header className={`py-6 flex items-center ${withHeadingView && 'flex-row-reverse justify-between'}`}>

                        {withHeadingView &&
                            <div className='h-full flex items-center'>
                                {withHeadingView}
                            </div>
                        }

                        <Text
                            tailwind='mr-3'
                            id='heading'
                            type='heading-medium'>{title}</Text>


                    </header>

                    <main className='h-full'>
                        <ContentWrapper className='h-full' >
                            {children}
                        </ContentWrapper>
                    </main>
                    
                </div>
            </GrayDiv>
        </div>
    );
};

Content.propTypes = {
    title: PropTypes.string,

};

export default Content;