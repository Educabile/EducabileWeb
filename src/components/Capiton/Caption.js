import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'

const Caption = props => {
  const { children, className, align, style } = props

  const captionCSS = classNames(
    'caption',
    {
      [`${align}-align`]: align,
    },
    className
  )

  return (
    <div className={captionCSS} style={style}>
      {children}
    </div>
  )
}

Caption.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

export default Caption
