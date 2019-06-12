import React from 'react'
import PropTypes from 'prop-types'

const Slide = ({ image, children, ...other }) => (
  <li {...other}>
    {image}
    {children}
  </li>
)

Slide.propTypes = {
  children: PropTypes.node,
  /**
   * The image that will be used in the Slide
   */
  image: PropTypes.node.isRequired,
}

export default Slide
