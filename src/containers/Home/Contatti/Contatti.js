import React from 'react'
import PropTypes from 'prop-types'

import Base from 'components/Base/Base'

const Contatti = ({ children, title }) => (
  <Base id="contatti" title={title}>
    {children}
  </Base>
)

Contatti.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Contatti
