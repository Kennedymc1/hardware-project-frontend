import React from 'react';
import PropTypes from 'prop-types';
import Content from './content'
import { useFadeAnimParent } from 'libs/hooks/useFadeAnim';

const Banner = (props) => {
    const { isShown } = props

    const { render, stopRender } = useFadeAnimParent(isShown);

    return (
        render &&
        <Content
            stopRender={stopRender}
            {...props}
            className={props.className}
        />
    );
};

Banner.defaultProps = {
    showDismiss: false,
    isShown: false,
    narrow: false,
}
Banner.propTypes = {
    onButtonClick: PropTypes.func,
    buttonText: PropTypes.string,
    text: PropTypes.string,
    onCloseComplete: PropTypes.func,
};

export default Banner;