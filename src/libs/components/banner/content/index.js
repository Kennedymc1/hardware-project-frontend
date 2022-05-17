import React from 'react';
import Button from 'libs/components/button';
import { ReactComponent as DismissSVG } from '../images/dismiss.svg'
import styled from 'styled-components'
import IconButton from 'libs/components/iconbutton'
import Text from 'libs/components/text'
import { useFadeAnimChild } from 'libs/hooks/useFadeAnim';

const Container = styled.div`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Content = ({ onButtonClick, buttonText, text, tailwind, className, onCloseComplete, isShown,
    stopRender, showDismiss, testid,buttonTestid, narrow }) => {

    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    return (
        <Container
            data-testid={testid}
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            className={`z-40  bottom-0 left-0 right-0  m-4 flex justify-center pointer-events-none
           items-center fixed`}>

            <div className={`bg-indigo-700 p-2 flex justify-between items-center rounded-md pointer-events-auto ${narrow ? 'w-64 ' : 'w-full'}  ${tailwind} ${className}`}>
                <Text
                    type='text-small'
                    color
                    tailwind='text-gray-100'
                >
                    {text}
                </Text>

                <div className='flex relative'>
                    <Button
                        testid={buttonTestid}
                        color
                        rounded
                        tailwind='text-indigo-600 whitespace-none ml-4 rounded text-xs'
                        onClick={onButtonClick}
                        size='extra-small'
                        variant='outline'
                    >{buttonText}
                    </Button>

                    {showDismiss &&
                        < IconButton
                            color
                            size='small'
                            tailwind='text-gray-100 ml-4  '
                            onClick={() => close()}
                            src={<DismissSVG />}
                        />
                    }
                </div>
            </div>
        </Container>
    );
};

export default Content;