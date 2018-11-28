import React from 'react'
import PropTypes from 'prop-types'

import Base from 'components/Base/Base'

const Contatti = ({ id, children, title, className, button }) => (
  <Base id={id} title={title} className={className} button={button}>
    {children}
  </Base>
)

Contatti.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.node,
}

Contatti.defaultProps = {
  id: 'contatti',
}

export default Contatti
