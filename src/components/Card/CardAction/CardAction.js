import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'

const CardAction = props => {
  const { children, className, style } = props

  const actionCSS = classNames('card-action', className)

  return (
    <div className={actionCSS} style={style}>
      {children}
    </div>
  )
}

CardAction.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default CardAction
