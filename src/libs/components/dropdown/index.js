import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from './content';
import { useFadeAnimParent } from '../../hooks/useFadeAnim'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
`;

/**
 * 
 * @NOTE: to set margin on the child element, the margin should be set on the DropDown component
 */
const DropDown = (props) => {
    const { children, tailwind, className } = props

    if (children.length && children.length !== 1) {
        throw new Error('children should only have one element or component')
    }

    const [isShown, setIsShown] = useState(false)
    const { render, stopRender } = useFadeAnimParent(isShown)

    const childOnClick = children.props.onClick

    const onClick = () => {
        setIsShown(true)
        if (typeof childOnClick !== 'undefined') { childOnClick() }
    }

    const newChildren = React.cloneElement(children, {
        onClick: onClick,
    })


    return (

        <Container
            className={`${tailwind} ${className}`}>

            {newChildren}

            {
                render &&
                <Content
                    isShown={isShown}
                    setIsShown={setIsShown}
                    {...props}
                    stopRender={stopRender}
                />
            }
        </Container>

    );
};

DropDown.defaultProps = {
    position: 'top-right',
variant: 'nav'

}

DropDown.propTypes = {
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'left',
        'right', 'bottom']),
    onCloseComplete: PropTypes.func,
    content: PropTypes.object,
    variant: PropTypes.oneOf(['nav','normal'])
};

export default DropDown;