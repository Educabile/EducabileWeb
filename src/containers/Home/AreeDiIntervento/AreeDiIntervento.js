import React from 'react'
import PropTypes from 'prop-types'

import Base from 'components/Base/Base'

const AreeDiIntervento = ({ title, content }) => (
  <Base id="aree-di-intervento" title={title} content={content} />
)

AreeDiIntervento.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

export default AreeDiIntervento
