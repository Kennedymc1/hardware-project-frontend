import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'libs/components/alert'

const SuccessAlert = ({ isShown, title, content, id, tailwind, fullScreen,showDismiss }) => {
    return (
        <div
            className={isShown && `w-full ${fullScreen && 'h-full flex items-center px-12 justify-center'}`}
        >
            <Alert
                id={id}
                showDismiss={showDismiss}
                tailwind={tailwind}
                isShown={isShown}
                variant='success'
                title={title}
                content={content}
            />
        </div >

    );
};

SuccessAlert.defaultProps = {
    fullScreen: false,
    showDismiss: true
}
SuccessAlert.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    isShown: PropTypes.bool

};

export default SuccessAlert;