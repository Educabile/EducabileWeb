import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'

const CardTitle = props => {
  const { children, className, reveal, closeReveal, style } = props

  const titleCSS = classNames(
    'card-title',
    {
      activator: reveal,
    },
    className
  )

  return (
    <span className={titleCSS} style={style}>
      {children}
      {reveal && <i className="material-icons right">more_vert</i>}
      {closeReveal && <i className="material-icons right">close</i>}
    </span>
  )
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  reveal: PropTypes.bool,
  closeReveal: PropTypes.bool,
}

export default CardTitle
