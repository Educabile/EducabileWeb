// TODO: Refactor this component if this PR is accepted: https://github.com/react-materialize/react-materialize/pull/701
import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import Style from './Caption.module.css'

const Caption = ({ className, placement, children, ...props }) => {
  return (
    <div
      className={cx(
        'caption',
        Style.caption,
        {
          [`${placement}-align`]: placement,
        },
        className
      )}
      {...props}>
      {children}
    </div>
  )
}

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['left', 'center', 'right']),
}

Caption.propDefault = {
  placement: 'left',
}

export default Caption
