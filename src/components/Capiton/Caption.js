// TODO: Refactor this component if this PR is accepted: https://github.com/react-materialize/react-materialize/pull/701
import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'

const Caption = ({ className, placement, children, ...props }) => (
  <div className={cx('caption', `${placement}-align`, className)} {...props}>
    {children}
  </div>
)

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Placement of the caption
   * @default 'center'
   */
  placement: PropTypes.oneOf(['left', 'center', 'right']),
}

Caption.defaultProps = {
  placement: 'center',
}

export default Caption
