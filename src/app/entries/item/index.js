import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'libs/components/wrapper'
import Text from 'libs/components/text'
import Badge from 'libs/components/badge'




function Item({ isGray, onClick, _id, time, index, banned }) {

  console.log({ _id })

  return (
    <Wrapper
      onClick={() => onClick(_id)}
      tailwind='grid grid-cols-3  py-2 lg:py-4 items-center px-2 lg:px-6 cursor-pointer hover:bg-cyan-50'
      isGray={isGray}>
      <Text >{index + 1}</Text>
      <Text >{time}</Text>

      {banned && 
        <div className='flex'>
          <Badge
            variant='red'>Banned</Badge>
        </div>
      }
    </Wrapper >
  )
}

Item.propTypes = {

}

export default Item

