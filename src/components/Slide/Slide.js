import React from 'react'
import PropTypes from 'prop-types'

const Slide = props => {
  const { children, image } = props
  return (
    <React.Fragment>
      <img src={image} alt="" />
      {children}
    </React.Fragment>
  )
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Slide
