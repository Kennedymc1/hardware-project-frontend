import React from 'react'
import PropTypes from 'prop-types'
import Text from 'libs/components/text'

function Item({data,isGray}) {
  return (
    <div className={`p-4 ${isGray && 'bg-gray-50'}`}>
        <Text>{data}</Text>
    </div>
  )
}

Item.propTypes = {}

export default Item
