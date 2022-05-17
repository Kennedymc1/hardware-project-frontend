import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
    return (
        <div className='flex justify-evenly'>
            {children}
        </div>
    );
};

FormGroup.propTypes = {

};

export default FormGroup;