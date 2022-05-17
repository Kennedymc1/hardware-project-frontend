import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFadeAnimChild } from '../../../hooks/useFadeAnim'
import '../../theme/fadeAnim.css'
import useClickOutside from 'libs/hooks/useClickOutside';


const Container = styled.div`
     ${ ({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`;

const Content = ({ stopRender, isShown, setIsShown, position, content, variant,className,
tailwind }) => {
    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, () => setIsShown(false))
    const dialogRef = useRef()

    const isNormalVariant = variant === 'normal'

    let renderComponent

    /**
     * the close function is passed as prop to the content component
     *  */ 
    if (isNormalVariant){
        renderComponent =  React.cloneElement(content, { close: close })
       
    }else {
        const children = content.props.children
        const contentChildren = children.length ? children : [children]

        renderComponent = contentChildren.map((element) => (
            React.cloneElement(element, { close: close })
        ))
    }

    useClickOutside([dialogRef], () => close())

    return (
        <Container
            className={`absolute z-index-20 origin-top-right right-0 mt-2 
            ${!isNormalVariant ? 'w-56' : 'w-full'} rounded-md
             shadow-lg`}
            ref={dialogRef}
            fadeOut={fadeOut}
            onAnimationEnd={onAnimationEnd}
        >
            <div className="rounded-md bg-white shadow-xs w-full">
                <div className='py-1 w-full'>
                    {renderComponent}
                </div>
            </div>
        </Container>
    );
}

Content.propTypes = {

};

export default Content;