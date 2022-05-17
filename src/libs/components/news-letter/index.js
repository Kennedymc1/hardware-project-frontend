import React from 'react';
import PropTypes from 'prop-types';
import Simple from './simple'
import Dark from './dark'
import Form from 'libs/components/form'

const NewsLetter = ({ variant, title, hasForm,inputId,inputName }) => {

    const component = () => {
        switch (variant) {
            case 'simple':
                return <Simple
                inputId={inputId}
                inputName={inputName}
                    title={title}
                />
            case 'dark':
                return <Dark 
                inputId={inputId}
                inputName={inputName}/>
        }
    }

    return (
        <div>
            {hasForm ?
                <Form>{component()}</Form>
                :
                component()
            }
        </div>
    );
};

NewsLetter.defaultProps = {
    hasForm: true,
    variant: 'simple',
    title: {
        textBlack: 'Want product news and updates?',
        textColor: ' Sign up for our newsletter.'
    }

}

NewsLetter.propTypes = {
    variant: PropTypes.oneOf(['simple', 'dark']),
    title: PropTypes.shape({
        textBlack: PropTypes.string,
        textColor: PropTypes.string,

    }),
    inputId: PropTypes.string,
    inputName: PropTypes.string

};

export default NewsLetter;