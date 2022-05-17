import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import Button from 'libs/components/button'
import {ReactComponent as BackSVG} from 'images/chevron-left.svg'

const BackButton = ({tailwind}) => {
    const history = useHistory()

    return (
        <Button
        onClick={() => history.goBack()}
        tailwind={`pl-0 ${tailwind}`}
        variant='text'
        iconLeft={<BackSVG />}
        size='extra-small' >Back</Button>
    );
};

BackButton.propTypes = {
    
};

export default BackButton;