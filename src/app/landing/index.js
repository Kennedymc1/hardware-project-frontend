import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

function Landing(props) {

    const history = useHistory()

    useEffect(()=>{
        history.replace('/login')
    },[])
  return (
    <div>Landing</div>
  )
}

Landing.propTypes = {}

export default Landing
