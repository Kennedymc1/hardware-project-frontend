import React from 'react';
import PropTypes from 'prop-types';
import Standard from './components/standard'
import Mass from './components/mass'

const Pricing = (props) => {
    const { type } = props
    return (
        type === 'mass' ?
            <Mass
                {...props}
            />
            :
            <Standard
                {...props}
            />
    );
};

Pricing.defaultProps = {
    type: 'normal'
}
Pricing.propTypes = {
    type: PropTypes.oneOf(['normal', 'mass'])
};

export default Pricing;