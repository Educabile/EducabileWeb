import React from 'react'
import PropTypes from 'prop-types'

import Base from 'components/Base/Base'

const AreeDiIntervento = ({ id, title, content, className, button }) => (
  <Base id={id} title={title} content={content} className={className} button={button} />
)

AreeDiIntervento.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

AreeDiIntervento.defaultProps = {
  id: 'aree-di-intervento',
}

export default AreeDiIntervento
