import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Card from '../card';


const Wrapper = styled(Card)`
  min-width: ${({minWidth}) => minWidth};
`;

function CardWrapper(props) {
  return (
    <Wrapper
      {...props} />

  )
}

CardWrapper.defaultProps = {
  minWidth: '28rem'
}
CardWrapper.propTypes = {
  minWidth: PropTypes.string
}

export default CardWrapper

